// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод some, вывести true, если хотя бы один элемент массива является числом.
// Входные: ['a', 2, 'c', 'd'] → Результат: true
// Входные: ['a', 'b', 'c', 'd'] → Результат: false
// Входные: [10, 'b', 'c', 'd'] → Результат: true

const n = +prompt("enter");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("enter"));
}

const result = arr.some(function (elem) {
  if (!isNaN(elem)) {
    return true;
  } else {
    return false;
  }
});
console.log(result);
