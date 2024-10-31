import * as net from "node:net";
import * as http from "node:http";

function findAvailabelPort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen((desiredPort), () => {
      const { port } = server.address()
      console.log("Port available found: ", port)
      server.close()
      setTimeout(() =>
        resolve(port)
        , 1000)
    })
    server.on('error', (error) => {
      if (error === 'EADDRINUSE') {
        findAvailabelPort(0).then((port) => resolve(port))
      } else {
        reject(error)
      }
    })
  })
}

const server = http.createServer((req, res) => {
  if (req.url === '/sayHello') {
    res.write('Hello from server')
    return res.end()
  }
  return res.end('Server running')
})

findAvailabelPort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server in http://localhost:${server.address().port}`)
  })
})
  .catch((error) => console.log('Error starting server', error))

