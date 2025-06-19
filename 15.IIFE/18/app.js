// Напишите IIFE-функцию, принимающую строку и возвращающую количество гласных букв в ней.
// "JavaScript" // Ожидаемый вывод: 3 (a, a, i)
(() => {
  let str = "JavaScript";
  let vowels = ["a", "e", "i", "o", "u"];
  let result = str.split("").filter((el) => vowels.includes(el)).length;
  console.log(result);
})();
