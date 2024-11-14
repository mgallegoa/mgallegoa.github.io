import express from "express";

const app = express()
app.disable('x-powered-by')

//Middlewares
app.use((req, res, next) => {
  console.log("Middleware message")

  if (req.method !== 'POST') { return next() }
  if (req.headers['content-type'] !== 'application/json') { return next() }

  // Only for post calls
  let body = ""
  // Listen events
  req.on('data', chunk => {
    body = body + chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data
    next()
  })
})

// The previous code is same in Express to do: app.use(express.json())
// app.get((req,res,next) => {})
// app.use('urlMiddleware/*',(req,res,next) => {})

app.get('/', (req, res) => {
  const { url, method } = req
  // res.json({ message: "Difference, express detect the response Content-type", url, method })
  res.send(`<h1>Welcome to the basic express server, method used: ${method}, url: ${url}</h1>`)
})

app.get('/about', (req, res) => {
  const { maxHeadersCount, path, host, protocol } = req
  res.write(`maxHeadersCount: ${maxHeadersCount}, path: ${path} , host: ${host}, protocol: ${protocol}`)
  res.end('<h1>about express server</h1>')
})
app.post('/', (req, res) => {
  // let body = ""
  // // Listen events
  // req.on('data', chunk => {
  //   body = body + chunk.toString()
  // })
  // req.on('end', () => {
  //   const data = JSON.parse(body)
  //   data.timestamp = Date.now()
  //   // Call save bd
  //   res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
  //   return res.end(JSON.stringify(data))
  // })

  res.status(201).json(req.body)
})
// Syntaxis like a middleware
app.use((req, res) => {
  res.status(404).send(`<h1>Not Found</h1> ${req.url}`)
})

// nullish coalescing (??) operator. Return right if left is  null or undefined
const port = process.env.PORT ?? 4000
app.listen(port, () => {
  console.log('Server running on port ', port)
})

