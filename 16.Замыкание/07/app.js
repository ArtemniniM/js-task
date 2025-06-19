// Создай функцию isDivisibleBy(a)(b), которая проверяет, делится ли b на a без
// остатка.

function isDivisibleBy(a) {
  return function name(b) {
    if (b % a === 0) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
}
isDivisibleBy(4)(13);
