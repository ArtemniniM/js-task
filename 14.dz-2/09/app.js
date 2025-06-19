// Функция принимает массив чисел.
// Возвращает true, если все числа положительные, иначе false.

const checkAllNum = (arr) => {
  const res = arr.every((el) => el > 0);
  return res;
};

console.log(checkAllNum([2, -2, 4, 6, 4, 8]));
