// Найти и вывести наибольшее число
const arr = [1, 5, 6, 3];
const MaxNum = () => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};
console.log(MaxNum());
