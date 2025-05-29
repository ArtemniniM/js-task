// У вас есть пустой массив. С помощью цикла for заполните его десятью значениями, которые
// пользователь вводит с помощью prompt.

const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(prompt("enter"));
}
console.log(arr);
