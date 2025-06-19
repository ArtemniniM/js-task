// Дан массив [1, 2, 3, 4]. Используя reduce, вычислите сумму всех чисел.

const arr = [1, 2, 3, 4];

const res = arr.reduce((sum, el) => (sum += el), 0);
console.log(res);
