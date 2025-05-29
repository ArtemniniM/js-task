// Дан массив [1, 2, 3, 4, 5, 6]. Создайте новый массив только из чётных чисел.

const arr = [1, 2, 3, 4, 5, 6];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);
