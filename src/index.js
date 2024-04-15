import { pow } from "./pow";
import { sum } from "./sum";

console.log(sum); //TODO: sum is undefined

const mathObject = {
  pow,
  sum,
};

console.log("pow");
console.log(mathObject.pow(2, 3));
console.log("sum");
console.log(mathObject.sum(2, 3));
