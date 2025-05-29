// Проверить, состоит ли строка только из цифр.
//  Строка: "12345"
//  Использовать: split(""), every (char => !isNaN(char))
//  Результат: true

const str = "12345";
const spl = str.split("").every((char) => !isNaN(char));
console.log(spl);
