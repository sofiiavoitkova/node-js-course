"use strict";
// const http = require("http");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var server_1 = __importDefault(require("./server"));
server_1.default.listen(3001, function () {
    console.log('hello on http://localhost:3001');
});
//# sourceMappingURL=index.js.map