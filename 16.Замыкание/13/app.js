// Создай функцию makeMultiplier(x), которая возвращает функцию умножения на x.

function makeMultiplier(x) {
  return function name(y) {
    console.log(y * x);
  };
}
const res = makeMultiplier(5);
res(3);
