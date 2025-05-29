// Создайте массив из 10 числовых значений вводимых через prompt и сформируйте массив.
//  Для каждого числа найдите квадратный корень.
//  Выведите только те, у которых корень — целое число.

const arr = [];
const newarr = [];
for (let i = 0; i < 10; i++) {
    arr.push(+prompt("enter"));
}
for (let j = 0; j < arr.length; j++) {
    let sqrt = Math.sqrt(arr[j]);
  if (Number.isInteger(sqrt)) {
    newarr.push(arr[j]);
  }
}
