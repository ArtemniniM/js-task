// Создайте 2 функции:
// isNumericString(str) — возвращает true, если строка состоит только из цифр
// (например: "123", "0045", но не "12a").
// sumNumericStrings(arr) — внутри вызывает isNumericString.
// Если isNumericString возвращает true, преобразуйте строку в число и прибавьте к общей сумме.
// Функция должна вернуть сумму всех строк из массива, содержащих только числа.

function isNumericString(str) {
  if (!isNaN(str)) {
    return str;
  }
}

function sumNumericStrings(arr) {
  return arr
    .filter(isNumericString)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumNumericStrings(["123", "45", "12a", "8", " 24"]));
