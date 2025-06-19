// Функция принимает параметр n, а возвращает массив чисел от 1 до n.
// console.log(generateArray(5)); // [1, 2, 3, 4, 5]

const generateArray = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i + 1);
  }
  return array;
};
console.log(generateArray(5));
