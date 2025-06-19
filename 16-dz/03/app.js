// IIFE. Выведи массив чётных чисел от 0 до N.

(function () {
  let n = 5;
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
})();
