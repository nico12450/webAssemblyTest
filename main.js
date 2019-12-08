const { readFileSync } = require("fs");

const run = async () => {
  const buffer = readFileSync("./main.wasm");
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  affiche1 = instance.exports.affiche1;
  double = instance.exports.double;
  somme = instance.exports.somme;
  console.log(affiche1())
  console.log(double(10));
  console.log(somme(10,20));
};

run();