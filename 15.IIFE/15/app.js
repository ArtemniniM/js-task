// Функция принимает массив чисел и порог. Выводит только те числа, у которых
// сумма цифр больше порога.
// [12, 49, 123, 88, 305], 10); // Ожидаемый вывод: 49, 123, 88

const checkNums = () => {
  const arr = [12, 49, 123, 88, 305];
  const n = 10;

  return arr.filter((el) => {
    const sumOfEl = String(el)
      .split("")
      .reduce((sum, el) => sum + +el, 0);

    return sumOfEl > n;
  });
};

console.log(checkNums());
