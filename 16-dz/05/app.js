// Подсчёт количества согласных в строке. IIFE//

(function () {
  let count = 0;
  let str = "artem";
  let vowels = ["a", "e", "i", "o", "u", "y"];

  let spl = str.split("").filter((el) => !vowels.includes(el));

  count = spl.length;

  console.log(count);
})();
