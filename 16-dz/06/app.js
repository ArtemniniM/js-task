// Умножение трёх чисел через каррирование

function a(a) {
  return function b(b) {
    return function c(c) {
      console.log(a * b * c);
    };
  };
}
a(3)(3)(3);
