import express from "express";
import logger from "morgan";
import { Server } from "socket.io";
import { createServer } from "node:http";
import dotenv from "dotenv";
import { createClient } from "@libsql/client";

dotenv.config();

export const dbTurso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

await dbTurso.execute(`CREATE TABLE IF NOT EXISTS messages(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  user TEXT
)`);

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 5 * 60 * 1000, // the backup duration of the sessions and the packets
  },
});

io.on("connection", async (socket) => {
  console.log("user connection");
  socket.on("disconnect", () => {
    console.log("Disconnected.");
  });
  socket.on("chat_message", async (message) => {
    let result;
    const username = socket.handshake.auth.username ?? "anonymous";
    try {
      result = await dbTurso.execute({
        sql: `INSERT INTO messages (content, user) VALUES (:msg, :username)`,
        args: { msg: message, username },
      });
    } catch (error) {
      console.log(error);
      return;
    }
    io.emit(
      "chat_message",
      message,
      result.lastInsertRowid.toString(),
      username,
    );
  });

  // console.log(socket.handshake.auth);

  if (!socket.recovered) {
    // Recover the messages without connection
    try {
      const result = await dbTurso.execute({
        sql: "SELECT id, content, user FROM messages WHERE id > ?",
        args: [socket.handshake.auth.serverOffset ?? 0],
      });
      result.rows.forEach((row) => {
        socket.emit("chat_message", row.content, row.id.toString(), row.user);
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const port = process.env.PORT ?? 3000;

app.use(logger("dev"));
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/index.html");
});

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
