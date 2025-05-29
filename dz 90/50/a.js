// Преобразовать массив строк в строку без повторов, отсортировать по алфавиту.
//  Массив: ["b", "a", "b", "c"]
//  Использовать: filter (уникальные), sort(), join(",")
//  Результат: "a,b,c"

const arr = ["b", "a", "b", "c"];

const res = arr
  .filter((el, index) => arr.indexOf(el) === index)
  .sort()
  .join("");
console.log(res);
