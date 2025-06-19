// Подсчитать количество положительных и отрицательных чисел
const arr = [1, 5, 6, 3, -4];

const checkNum = () => {
  let res = 0;
  let res1 = 0;

  arr.forEach((el) => (el > 0 ? res++ : res1++));
  return { pos: res, neg: res1 };
};
console.log(checkNum());
