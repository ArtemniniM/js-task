// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки.
// Вторая для получения суммы всех строчных элементов массива. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую конкатенацию всех строчных
// элементов массива.

const arr = ["artem", "minin"];
const checkStr = () => {
  return arr.every((el) => typeof el === "string");
};
const resulFunc = () => {
  let res = [];
  if (checkStr() === true) {
    for (let i = 0; i < arr.length; i++) {
      res.push(arr[i]);
    }
  }
  return res.join(" ");
};
console.log(resulFunc());
