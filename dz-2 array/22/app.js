// Дан массив [1, 2, 3]. Создайте новый массив, где каждое значение исходного увеличено на 1. [2, 3, 4]

const arr = [1, 2, 3];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  newarr.push(arr[i] + 1);
}
console.log(newarr);
