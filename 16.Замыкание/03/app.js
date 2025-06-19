// Реализуй divideBy(x)(y), где x — делитель, y — делимое.

function divideBy(x) {
  return function fds(y) {
    console.log(x / y);
  };
}
divideBy(10)(5);
