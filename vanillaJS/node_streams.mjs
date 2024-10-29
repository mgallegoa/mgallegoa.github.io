// Example 1: of create a big_file
// import { writeFile } from "node:fs/promises";
//
// await writeFile('./big_file.txt', 'hello word'.repeat(100000));
// console.log('Finished file created')


// Example 2: read a big file with streams
// import { createReadStream } from "node:fs";
//
// const stream = createReadStream('./big_file.txt', 'utf-8')
// stream.on('data', (chunk) => { console.log(chunk) })
// stream.on('error', (error) => { console.log(error) })
// stream.on('end', () => { console.log('***** Read Finished.') })


// Example 3: read a big file with streams, and send to http response
import * as http from "node:http";
import { createReadStream } from "node:fs";

const server = http.createServer((req, res) => {
  const fileStream = createReadStream('./big_file.txt', {
    encoding: 'utf-8',


  })
  fileStream.on('data', (chunk) => { fileStream.pipe(res) })
  fileStream.on('on', (error) => { console.error(error) })
})
server.listen(0, () => {
  console.log(`Server running in port ${server.address().port}`)
})
