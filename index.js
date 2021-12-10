const data = require("./data.js");
var _ = require('lodash');

console.log(data.numbers);
console.log(data.name + " is from " +data.hometown)

const sum = require("./sum.js");

console.log(sum.sumOfArray(data.numbers));
console.log(_.shuffle(data.numbers)); //shuffles the array