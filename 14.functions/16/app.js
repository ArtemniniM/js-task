// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что
// в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в
// квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив из всех четных чисел, возведенных в квадрат

const n = +prompt();

function doArray() {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(+prompt());
  }
  return arr;
}
const array = doArray(n);

function checkArray() {
  return array.every((el) => !isNaN(el));
}

function doChetArray() {
  let newArr = [];
  const res = checkArray();
  if (res === true) {
    return array.map((el) => el ** 2);
  } else {
    return "error";
  }
}
const res1 = doChetArray();
console.log(res1);
