const path = require("node:path");

//barra separadora de carpetas segun el so
console.log(path.sep);

const filePath = path.join("./content", "subFolder", "test.text");
console.log(filePath);

const extesion = path.extname("imagen.jpg");
console.log(extesion);
