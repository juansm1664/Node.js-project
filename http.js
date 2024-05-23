const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("hola mudno");
});

server.listen(3000, () => {
  console.log("server linsten on port 3000");
});
