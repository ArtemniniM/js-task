// Проверить, начинается ли строка с заглавной буквы.
// Строка: "Hello"
// Использовать: сравнение первого символа с верхним регистром через toUpperCase()
// Результат: true

const str = "Hello";

if (str[0] === str[0].toUpperCase()) {
  console.log(true);
} else {
  console.log(false);
}
