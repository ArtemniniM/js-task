// Реализуй
// каррированную функцию sum, которая вызывается так: sum(2)(3) и выводит сумму
// чисел.

function sum(a) {
  return function res(b) {
    console.log(a + b);
  };
}
sum(2)(3);
