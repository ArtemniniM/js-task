let num = +prompt("enter");
if (Number.isInteger(Math.sqrt(num))) {
  console.log(Math.sqrt(num));
} else {
  console.log(Math.round(Math.sqrt(num)));
}
