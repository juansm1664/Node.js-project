const fs = require("node:fs");

const text = fs.readFileSync("./index.txt", "utf-8");

console.log(text);
