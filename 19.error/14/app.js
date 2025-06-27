// *Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и
// возвращает отсутствующую в массиве. Добавить проверки на элементы массива
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P "

const arr = ["a", "b", "c", "d", "f"];

function checkLetters() {
  try {
    let checkArray = arr.every((el) => isNaN(el));
    if (!checkArray) throw new Error("includes numbers");
    if (!/[a-zA-Z]/.test(str)) throw new Error("error ");
  } catch (error) {
    console.log(error.message);
  }
}
checkLetters();
