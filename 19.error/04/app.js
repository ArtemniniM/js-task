// На вход подается число n – количество элементов массива. Необходимо заполнить массив
// случайными элементами в диапазоне 0<n< 100. Добавить проверки на ввод n.

const n = prompt();
const arr = [];

function pushArray() {
  try {
    if (isNaN(n)) throw Error("n-string");
    if (n < 0) throw Error("num<0");
    for (let i = 0; i < n; i++) {
      arr.push(Math.round(Math.random() * 100));
    }
    console.log(arr);
  } catch (error) {
    console.log(error.message);
  }
}
pushArray();
