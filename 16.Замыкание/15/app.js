// greaterThanX(x) возвращает функцию, которая проверяет, больше ли переданное
// значение x.

function greaterThanX(x) {
  return function name(y) {
    if (x > y) {
      console.log(x);
    } else {
      console.log(y);
    }
  };
}
const res = greaterThanX(6);
res(7);
