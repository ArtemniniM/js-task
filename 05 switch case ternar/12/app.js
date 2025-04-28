const num = +prompt("enter");
const num2 = +prompt("enter");
if (!isNaN(num) && !isNaN(num2)) {
  console.log("i'm", num + num2);
} else {
  console.log("error");
}
