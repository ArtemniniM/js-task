// 4. Выведите все числа, кратные 3, из массива [2, 5, 9, 15, 0, 4]

const arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 == 0) console.log(arr[i]);
}
