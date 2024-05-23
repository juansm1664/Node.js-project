const fs = require("node:fs/promise");
const { default: test } = require("node:test");
const { text } = require("stream/consumers");

fs.readFile("./index.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

console.log("hace algo mientra lee el archivo");

console.log("Leyendo el archivo texto");
fs.readFile("./index.txt", "utf-8").then((text) => {
  console.log("segundo texto", text);
});
