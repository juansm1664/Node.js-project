const { rejects } = require("node:assert");
const { error } = require("node:console");
const net = require("node:net");

function findAvailablePort(desiredPort) {
  const server = net.createServer();

  return new Promise((resolver, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolver(port);
      });
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findAvailablePort(0).then((port) => resolver(port));
      } else {
        reject(err);
      }
    });
  });
}
module.exports = { findAvailablePort };
