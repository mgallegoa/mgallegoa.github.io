import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("user connection");
  socket.on("disconnect", () => {
    console.log("Disconnected.");
  });
  socket.on("chat_message", (message) => {
    io.emit("chat_message", message);
  });
});

const port = process.env.PORT ?? 3000;

app.use(logger("dev"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
