import { createServer } from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const newServer = createServer((req, res) => {
  const pathHTML = path.dirname(fileURLToPath(import.meta.url))
  const pathIndex = path.join(pathHTML, 'indexAppServices.html')
  const pathJs = path.join(pathHTML, 'Service.js')

  if (req.url === '/' || req.url === '/index' || req.url === '/index.html') {
    fs.readFile(pathIndex)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(`Server Error: ${error}`)
      })
  } else if (req.url === '/Service.js') {
    fs.readFile(pathJs)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'application/javascript' })
        res.end(data)
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(`Server Error: ${error}`)
      })
  } else {
    console.log('Not Found', req.url)
  }

})

newServer.listen(3000, () => {
  console.log(`Server in http://localhost:${newServer.address().port}`)
})

newServer.on('error', (error) => console.error('Error in the server, trace of the error -->', error))

