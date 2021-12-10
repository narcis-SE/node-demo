const data = require("./data.js");

console.log(data.numbers);
console.log(data.name + " is from " +data.hometown)

const sum = require("./sum.js");

console.log(sum.sumOfArray(data.numbers));