// Функция принимает старт, шаг и количество элементов и выводит последовательность.
// sequence(1)(3)(4); // 👉 1 4 7 10

function sequence(start) {
  return function (step) {
    return function (count) {
      for (let i = start, n = 0; n < count; i += step, n++) {
        console.log(i);
      }
    };
  };
}
sequence(1)(3)(4);
