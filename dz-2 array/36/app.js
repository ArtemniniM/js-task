// Пусть у вас есть массив строк: ["42", "hello", "3.14", "world", "25"].
//  Оставьте в массиве только те, что являются целыми числовыми значениями.
// ["42", "hello", "3.14", "world", "25"] -> ["42", "25"]

const arr = ["42", "hello", "3.14", "world", "25"];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  let num = +arr[i];
  if (!isNaN(num) && Number.isInteger(num)) {
    newarr.push(num);
  }
}
console.log(newarr);
