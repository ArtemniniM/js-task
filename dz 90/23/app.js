// Скопировать в новый массив только строки.
//  Массив: [1, "a", 2, "b"]
//  Использовать: filter, typeof === "string"
//  Результат: ["a", "b"]

const arr = [1, "a", 2, "b"];

const newarr = arr.filter(function test(el) {
  return typeof el === "string";
});
console.log(newarr);
