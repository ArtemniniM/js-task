let a = +prompt("enter");
let b = +prompt("enter");
if (a % b == 0) {
  console.log("Делится,результат =", a / b);
} else if (a % b) {
  console.log("Делится с остатком, остаток =", a % b);
}
