let num = +prompt("enter");
let numsecond = +prompt("enter");
let numthird = +prompt("enter");
if (num > numsecond && num > numthird) {
  console.log(num);
} else if (numsecond > num && numsecond > numthird) {
  console.log(numsecond);
} else if (numthird > numsecond && numthird > num) {
  console.log(numthird);
}

console.log(Math.max(num, numsecond, numthird));
