const num = +prompt("enter");
if (num <= 9) {
  console.log("Однозначное");
} else if (num <= 99) {
  console.log("Двузначное");
} else {
  console.log("Многозначное");
}
