// Дан динамический массив. Найдите сумму всех чисел.

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(+prompt("enter"));
}
let sum = 0;
for (let j = 0; j < arr.length; j++) {
  sum += arr[j];
}
console.log(sum);
