// Удалить все гласные из строки и вернуть её длину.
//  Строка: "education"
//  Использовать: replaceAll с RegExp /[aeiou]/gi, length
//  Результат: 5

const str = "education";

const res = str.replaceAll(/[aeiou]/gi, "");
console.log(res.length);
