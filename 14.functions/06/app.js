// На входе n – количество элементов массива. Далее производится заполнение массива с
// клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения
// количества элементов массива
const n = +prompt();

function doFill(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(prompt());
  }
  return arr;
}

function countElems(arr) {
  console.log(arr.length);
}

let arr1 = doFill(+n);
countElems(arr1);
