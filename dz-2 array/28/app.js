// Найти количество элементов, начинающихся на букву "a"
// ["apple", "banana", "avocado", "kiwi"] — 2

const arr = ["apple", "banana", "avocado", "kiwi"];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] === "a") {
    result++;
  }
}
console.log(result);
