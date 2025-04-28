let num = +prompt("enter");
if (num >= 0 && num <= 18) {
  console.log("детство");
} else if (num >= 19 && num <= 40) {
  console.log("молодость");
} else if (num >= 41 && num <= 100) {
  console.log("зрелость");
} else {
  console.log("некорректный ввод");
}
