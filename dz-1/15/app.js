let a = +prompt("enter");
let b = +prompt("enter");
let operator = prompt("enter");
if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log("error");
  }
}
