let a = prompt("Введите строку:");
if (a.split("").reverse().join("") === a) {
  console.log(true);
} else {
  console.log(false);
}
