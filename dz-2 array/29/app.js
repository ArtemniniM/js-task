// Вычислить среднее значение массива.
//  Среднее значение : сумма всех элементов деленная на их кол-во
// [10, 20, 30, 40] — 25

const arr = [10, 20, 30, 40];
result = 0;
for (let i = 0; i < arr.length; i++) {
  result += arr[i] / arr.length;
}
console.log(result);
