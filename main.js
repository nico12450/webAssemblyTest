const { readFileSync } = require("fs");

const run = async () => {
  const buffer = readFileSync("./main.wasm");
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  double = instance.exports.double
  console.log(double(10));
};

run();