// Создай функцию toUpperCaseAll(words), которая возвращает массив строк в верхнем регистре.

function toUpperCaseAll(words) {
  return words.map((word) => word.toUpperCase());
}

console.log(toUpperCaseAll(["hello", "world"]));
