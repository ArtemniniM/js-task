// Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего
// числа. Если таких чисел несколько, вернуть индекс первого найденного.
// Добавить проверки на ввод
// [1, 3, 7, 7, 5] -> 2

const arr = [1, 9, 7, 7, 5];

function mostValuebleIndex() {
  try {
    if (arr.length === 0) throw Error("array clear");
    let chechArray = arr.every((el) => !isNaN(el));
    if (!chechArray) throw Error("includes letters");
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }
    const res = arr.indexOf(max);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}
mostValuebleIndex();
