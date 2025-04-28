const num = +prompt("enter");
if (!isNaN(num)) {
  if (num === 0) {
    console.log("Обратного числа не существует");
  } else if (num) {
    console.log(1 / num);
  }
} else {
  console.log("error");
}
