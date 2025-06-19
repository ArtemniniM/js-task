// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для поиска максимального значения в массиве. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую максимальное значение массива

const arr = [23, 4, 8, 154];

const checkNums = () => {
  const res = arr.every((el) => !isNaN(el));
  return res;
};
const MaxElem = () => {
  let max = 0;
  if (checkNums() === true) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
  return max;
};
console.log(MaxElem());
