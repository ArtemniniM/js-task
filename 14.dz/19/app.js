// Создай функцию longWordsUpper(arr), которая
// отбирает строки длиной больше 3 символов и преобразует их в верхний регистр.

function longWordsUpper(arr) {
  return arr.filter((word) => word.length > 3).map((word) => word.toUpperCase());
}
console.log(longWordsUpper(["aaee", "aa", "fsfr"]));
