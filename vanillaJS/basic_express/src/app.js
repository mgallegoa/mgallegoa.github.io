import express from "express";

const app = express()

app.get('/', (req, res) => {
  const { url, method } = req
  res.send(`<h1>Welcome to the basic express server, method used: ${method}, url: ${url}</h1>`)
})

app.get('/about', (req, res) => {
  const { maxHeadersCount, path, host, protocol } = req
  res.write(`maxHeadersCount: ${maxHeadersCount}, path: ${path} , host: ${host}, protocol: ${protocol}`)
  res.send('<h1>about express server</h1>')
})
const port = process.env.PORT || 4000
app.listen(port)
console.log('Server running on port ', port)

