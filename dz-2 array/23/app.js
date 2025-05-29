// Дан динамический массив. Посчитайте количество чётных чисел.

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(+prompt("enter"));
}
let result = 0;
for (let j = 0; j < arr.length; j++) {
  if (arr[j] % 2 == 0) {
    result++;
  }
}
console.log(result);
