// Напишите IIFE-функцию, принимающую двумерный массив и выводящую сумму
// всех его элементов.
// [ [1, 2], [3, 4], [5, 6] ] // Ожидаемый вывод: 21

const twoFloorArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

(() => {
  let sum = 0;
  for (let i = 0; i < twoFloorArr.length; i++) {
    for (let j = 0; j < twoFloorArr[i].length; j++) {
      sum += twoFloorArr[i][j];
    }
  }
  console.log(sum);
})();
