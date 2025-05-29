// Дан массив [3, -1, 5, -9, 0]. Создайте новый массив  где отрицательные числа заменены на 0.

const arr = [3, -1, 5, -9, 0];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    newarr.push(0);
  } else {
    newarr.push(arr[i]);
  }
}
console.log(newarr);
