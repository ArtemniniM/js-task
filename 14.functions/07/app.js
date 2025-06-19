// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая
// для получения суммы всех элементов массива. Если результат функции проверки – true, то
// вызывать новую функцию, возвращающую сумму всех элементов массива

const arr = [5, 8, 9, 1];

const checkNums = () => {
  return arr.every((el) => !isNaN(el));
};
const resulFunc = () => {
  let res = 0;
  if (checkNums() === true) {
    res = arr.reduce((sum, el) => sum + el, 0);
  }
  return res;
};
console.log(resulFunc());
