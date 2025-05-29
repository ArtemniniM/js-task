// *Выведите каждый элемент массива [1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}
console.log(arr2);
