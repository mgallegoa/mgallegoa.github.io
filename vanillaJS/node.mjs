// npx --> node_modules/.bin/nodemon --> npx nodemon index.js
// Global variables
// globalThis in node is global but in browser is window
// __dirname, __filename, module, require (function)
globalThis.console.log(globalThis);
globalThis.console.log(typeof window);

// .save file_name and .load file_name

// Module Design Pattern

// Classic form: CommondJS Module System
// file 1: module.exports = sum
// file 2: const watheverName = require('./sum')
// file 1: To force the name: module.exports = {sum}
// file 2: const { sum } = require('./sum')
//(Default .js use CommondJS or .cjs)
// ES modules System (use with .mjs) node official > 12.x
// file 1: export function sum(a+b) { return a + b;}
// file 2: import { sum } from "./sum.mjs";

// Native modules
// const os = require("node:os");
import os from "node:os";
import { dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { builtinModules } from "node:module";

const __basename = basename(fileURLToPath(import.meta.url))
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const __filenameMeta = import.meta.filename
const __dirnameMeta = import.meta.dirname
console.log("__basename: ", __basename)
console.log("__filename: ", __filename);
console.log("__dirname: ", __dirname)
console.log("__filename meta: ", __filenameMeta);
console.log("__dirname meta: ", __dirnameMeta)
console.log("builtinModules: ", builtinModules);
console.log("globalThis.require: ", globalThis.require); // undefined for ECMAScript modules
console.log("globalThis.process: ", globalThis.process);
console.log("globalThis.process.argv for arguments: ", globalThis.process.argv);
console.log("globalThis.process.env. for arguments: ", globalThis.process.env.MY_CUSTOM_ENV_NAME);
// globalThis.process.exit(0)
console.log("OS: ", os.platform());
console.log("Release: ", os.release());
console.log("Architecture: ", os.arch());
console.log("CPUs: ", os.cpus());
console.log("Free memory: ", os.freemem() / 1024 / 1024);
console.log("Total memory: ", os.totalmem() / 1024 / 1024);
console.log("Up time, hours: ", os.uptime() / 60 / 60);
console.log("Up time, days: ", os.uptime() / 60 / 60 / 24);

setTimeout(() => { console.info("setTimeout for 1 second.") }, 1000);
// setInterval(() => { console.info("setInterval for 1 second.") }, 1000);




// Parallel promises
import { readFile } from "node:fs/promises";
Promise.all(
  [
    readFile("./node.cjs", "utf-8"),
    readFile("./node.cjs", "utf-8"),
  ]
).then(([text1, text2]) => {
  console.log("Finished read all files in parallel: ")
  console.log("text1: ", text1)
  console.log("text2: ", text2)
}).finally(
  console.log("------ Finally read in parallel.------")
)

// Async Await -> EM6 Top level await
import { log } from "node:console";
const text = await readFile("./PlayWithAsync.js", "utf-8")
log("Using async await, Top lavel await: ", text)

// Read File Asynchronous call-backs
// import fs from "node:fs"
// fs.readFile("./PlayWithAsync.js", "utf-8", (err, text) => {
//    if (err) {
//      console.error(err);
//      return;
//    }
//   log(text)
// })

// Read File Asynchronous promises
//import { fs } from "node:fs/promises";
// fs.readFile("./PlayWithAsync.js", "utf-8")
//   .then(text => {
//     console.log(text)
//   })

// Read File Asynchronous promises with utils promisify
// import { promisify } from "node:util";
// const promiseReadFile = promisify(fs.readFile)
// promiseReadFile("./node.cjs", "utf-8")
//   .then(text => {
//     console.log("usint util promisify: ")
//     console.log(text)
//   })

// Read File Synchronous
/*import fs from "node:fs"
import { log } from "node:console";
const text = fs.readFileSync("./PlayWithES6.js", "utf-8")
log(text)*/






// Path
import * as path from "node:path";
console.log("System separator: ", path.sep)
console.log("join rutes: ", path.join("home", "manuel", "testRuet", "file.txt"))
console.log("base name: ", path.basename("home/file.txt"))
console.log("Extention name: ", path.extname("home/file.txt"))



// HTTP
import * as http from "node:http";
http.createServer((request, response) => {
  console.info("request.utl: ", request.url)
  response.write("Manuel basic Server")
  return response.end()
}).listen(3000)
