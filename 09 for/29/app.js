// Дан массив чисел [1, 5, 13, 21, 8, 7, 14]. Найдите первое число,
//  которое делится на 7 без остатка. Если такого нет — вернуть "Not found".

const arr = [1, 5, 13, 21, 8, 7, 14];
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i]) && arr[i] % 7 === 0) {
    console.log(arr[i]);
    found = true;
    break;
  }
}
if (!found) {
  console.log("Not found");
}
