// Сделай функцию multiply(a)(b)(c), которая выводит результат a * b * c.

function multiply(a) {
  return function b(b) {
    return function c(c) {
      return a * b * c;
    };
  };
}
const res = multiply(2)(2)(2);
console.log(res);
