const _ = require("lodash");
const math = require("./math");

const numbers = [1, 2, 3, 4];
const sum = _.sum(numbers);
const product = math.multiply(5, 6);

console.log("Sum of array:", sum);
console.log("5 * 6 =", product);
console.log("Add 10 + 20 =", math.add(10, 20));
