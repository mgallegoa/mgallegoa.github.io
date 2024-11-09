const http = require('node:http')

// Common Js allow to import Json files
const dittoJSON = require("./pokemon/ditto.json")

const processRequest = (req, res) => {
  const { method, url } = req
  console.log("method, url: ", method, url)

  switch (method) {
    case ('GET'): {
      switch (url) {
        case ('/'): {
          res.setHeader('Content-Type', 'text/html; charset=UTF-8')
          return res.end('<h1>Get Json <a href="/pokemon/ditto">Pokemon ditto</a></h1>')
        }
        case ('/pokemon/ditto'): {
          res.setHeader('Content-Type', 'application/json; charset=UTF-8')
          return res.end(JSON.stringify(dittoJSON))
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=UTF-8')
          return res.end('<h1>404 Not Found</h1>')
        }
      }
    }
    case ('POST'): {
      switch (url) {
        case ("/pokemon"): {
          let body = ""
          // Listen events
          req.on('data', chunk => {
            body = body + chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            data.timestamp = Date.now()
            // Call save bd
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            return res.end(JSON.stringify(data))
          })
          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=UTF-8')
          return res.end('<h1>404 Not Found. POST Method</h1>')
        }
      }
      break
    }
    default: {
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
      return res.end('404 - Request not found')
    }
  }

}

const server = http.createServer(processRequest)

server.listen(3000, () => console.log("Server running."))
