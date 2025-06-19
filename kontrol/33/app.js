// Дан массив [10, 15, 20, 25]. Используя filter, получите массив только с чётными числами.

const arr = [10, 15, 20, 25];

const res = arr.filter((el) => el % 2 === 0);
console.log(res);

