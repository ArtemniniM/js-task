// Сформировать массив из длин строк.
// Вернуть массив, содержащий длины строк из исходного массива.
// ["apple", "kiwi", "banana"] — [5, 4, 6]

const arr = ["apple", "kiwi", "banana"];
const newarr = [];
for (let i = 0; i < arr.length; i++) {
  newarr.push(arr[i].length);
}
console.log(newarr);
