// Сформируйте массив из 10 значений prompt. Создайте строку из элементов массива, разделённых
// дефисами.
// Входные: [1, 2, 3, 4, 5, 6, 7, 8, 9] → Результат: '-1-2-3-4-5-6-7-8-9-'

const arr = [];
let result = "";
for (let i = 0; i < 10; i++) {
  arr.push(prompt("enter"));
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    result += "-";
  }
  result += arr[i] + "-";
}
console.log(result);
