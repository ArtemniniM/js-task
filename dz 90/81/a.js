// Посчитать количество слов, начинающихся с заглавной буквы.
// Строка: "Hello World hi there"
// Использовать: split(" "), цикл while, проверка первой буквы через сравнение с верхним регистром (метод toUpperCase)
// Результат: 2

const str = "Hello World hi there";
const spl = str.split(" ");
let i = 0;
let res = 0;
while (i < spl.length) {
  if (spl[i][0] === spl[i][0].toUpperCase()) {
    res++;
  }

  i++;
}
console.log(res);
