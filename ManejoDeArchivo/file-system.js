const fs = require("node:fs"); //A partir de node18 se recomienda el node:

const stats = fs.statSync("./index.txt");

console.log(
  stats.isFile(), //Si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // Si es un enlace simbolico
  stats.size //Tamaño de bytes
);
