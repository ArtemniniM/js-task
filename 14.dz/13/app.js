// Создай функцию printItems(arr), которая выводит в консоль каждый элемент массива
//  arr с новой строки, используя forEach.

function printItems(arr) {
  arr.forEach((item) => console.log(item)); // ✅ Используем `.forEach()`
}
printItems(["a", "r", "t", "e", "m"]);
