let num = +prompt("enter");
let numsecond = +prompt("enter");
if (num < 0 && numsecond > 0) {
  console.log("Противоположные");
} else if (num > 0 && numsecond < 0) {
  console.log("Противоположные");
} else if (num < 0 && numsecond < 0) {
  console.log("Не Противоположные");
} else if (num > 0 && numsecond > 0) {
  console.log("Не Противоположные");
} else {
  console.log("error");
}
