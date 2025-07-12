// На вход подается массив чисел. Найти количество уникальных элементов в массиве.
// Добавить проверку на ввод (все элементы должны быть числами).
// [1, 2, 2, 3, 4, 4, 5] -> 5
// (уникальные элементы: 1, 2, 3, 4, 5)

const arr = [1, 2, 2, 3, 4, 4, 5];

function specialNums() {
  try {
    let checkArray = arr.every((el) => !isNaN(el));
    if (!checkArray) throw new Error("includes letters");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i]));
    }
    console.log(newArr.length);
  } catch (error) {
    console.log(error.message);
  }
}
specialNums();
