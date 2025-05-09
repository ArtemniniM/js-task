let a = prompt("enter");
let symb = prompt("enter");
if (a.includes(symb)) {
  console.log(a.indexOf(symb));
} else {
  console.log("Символ не найден");
}
