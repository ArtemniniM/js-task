// На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа
// заменены на 0. Добавить проверку на ввод (все элементы массива должны быть числами).
// [-1, 2, -3, 4] -> [0, 2, 0, 4]

const arr = [-1, 2, -3, 4];

function replaceNums() {
  try {
    let checkArray = arr.every((el) => !isNaN(el));
    if (!checkArray) throw Error("includes letters");

    const rep = arr.map((el) => {
      if (el < 0) return 0;
      else return el;
    });
    console.log(rep);
  } catch (error) {
    console.log(error.message);
  }
}
replaceNums();
