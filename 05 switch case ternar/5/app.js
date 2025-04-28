const num = +prompt("enter");
if (!isNaN(num)) {
  let root = Math.sqrt(num);
  //   if (Number.isInteger(root)) {
  //     console.log(root);
  //   } else {
  //     console.log(root.toFixed[2]);
  //   }
  Number.isInteger(root) ? console.log(root) : console.log(root.toFixed(2));
} else {
  console.log("Вы ввели не число!");
}
