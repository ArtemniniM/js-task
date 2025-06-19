// Функция принимает массив чисел. Возвращает количество чётных элементов в нём.

const chetEl = (array) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      res++;
    }
  }
  return res;
};
console.log(chetEl([1, 3, 4, 6, 5, 8]));
