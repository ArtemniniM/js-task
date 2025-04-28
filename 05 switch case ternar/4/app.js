const num = +prompt("enter");
if (!isNaN(num)) {
  // if (num > 0) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  num > 0 ? console.log(true) : console.log(false);
} else {
  console.log("error");
}
