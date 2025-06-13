import { persons } from "./data.js";

function averageAge(arr) {
  const sum = arr.reduce((acc, p) => acc + p.age, 0);
  return sum / arr.length;
}

console.log("Average age:", averageAge(persons));
