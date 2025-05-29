// На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры.
// Создать новый массив, содержащий только те строки, которые начинаются с символов a или h.
// Проверить ввод только текстовых значений. Использовать метод filter.
// Входные: ["ann", "school", "hschool", "borabora"] → Результат: ["ann", "hschool"]
// Входные: ["apple", "banana", "harvest", "grape"] → Результат: ["apple", "harvest"]
// Входные: ["home", "anchor", "boat"] → Результат: ["home", "anchor"]

const n = +prompt("enter");
const arr = [];
const newarr = [];

for (let i = 0; i < n; i++) {
  arr.push(prompt("enter"));
}

const result = arr.filter(function (elem) {
  if (elem[0] == "a" || elem[0] == "h") {
    return true;
  } else {
    return false;
  }
});
console.log(result);


