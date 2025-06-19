// 4. Найди факториал числа с помощью цикла внутри IIFE.

(function () {
  let n = 3;
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  console.log(res);
})();
