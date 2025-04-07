import * as dotenv from 'dotenv'
dotenv.config()

// const http = require("http");

// const server = http.createServer(async (req, res) => {
//     console.log(req)
//     console.log(res)
//   if (req.method === "GET" && req.url === "/") {
//     console.log('hello from server')
//     res.end("Hello from server!");
//   }
// });

// server.listen(3001, () => {
//   console.log("server on http://localhost:3001");
// });

import app from './server'

app.listen(3001, () => {
    console.log('hello on http://localhost:3001')
})
