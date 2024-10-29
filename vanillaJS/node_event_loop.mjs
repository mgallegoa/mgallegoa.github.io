// In this file, have 2 examples for show how event loop work.
// Example 1
console.log("first message.")
setTimeout(() => {
  console.log("second message.")
}, 0);
console.log("third message.")

// Example 2
import { log } from "node:console";
import * as http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    for (let index = 0; index < 1000000; index++) {
      log("index ", index)
    }
    return res.end("<h1>Finished</h1>")
  }
  res.write("<h1>Welcome to server event loop demostration.  <a href='/about' target='_blanck'>Go to about</a></h1>")
  return res.end()
})
server.listen(0, () => {
  console.log(`Server running in port ${server.address().port}`)
})
