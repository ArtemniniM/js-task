// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Используя метод every, вывести true, если все элементы массива являются числами, иначе false.
// Входные: [1, 2, 3, 4] → Результат: true
// Входные: [1, 'a', 3, 4] → Результат: false

const n = +prompt("enter");
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("enter"));
}

const result = arr.every(function (elem) {
  if (!isNaN(elem)) {
    return true;
  } else {
    return false;
  }
});
console.log(result);
