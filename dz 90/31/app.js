// Развернуть строку вручную (без reverse).
//  Строка: "hello"
//  Использовать: цикл for (обратный), конкатенация строк
//   Результат: "olleh"

let str = "hello";

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}
