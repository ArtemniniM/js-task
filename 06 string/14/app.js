let a = +prompt("enter");
let num = +prompt("enter");
// if (a > num) {
//   console.log(a);
// } else if (num > a) {
//   console.log(num);
// } else {
//   console.log("Равны");
let result = a === num ? "Равны" : a > num ? a : num;
console.log(result);
