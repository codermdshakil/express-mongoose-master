const { person, sum, a, fruits } = require("./file-2");
const {
  person: person3,
  sum: sum3,
  a: a3,
  fruits: fruits3,
} = require("./file-3");

console.log(a3);
console.log(person3);
sum3(10, 20, 40);
console.log(fruits3);
