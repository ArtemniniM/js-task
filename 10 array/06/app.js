// Выведите все числа, кратные 5 или 3, из массива [2, 5, 9, 15, 0, 4].

const arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 == 0 || arr[i] % 3 == 0) {
    console.log(arr[i]);
  }
}
