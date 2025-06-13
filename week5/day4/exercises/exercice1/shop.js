const products = require("./products");

function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}

// Tester
console.log(findProduct("Laptop"));
console.log(findProduct("Shirt"));
console.log(findProduct("Phone"));
