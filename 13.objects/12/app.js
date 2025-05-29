// На входе пустой объект и количество элементов массива n. Введите с клавиатуры n чисел,
// сформируйте массив, а затем добавьте в объект ключ sum, значением которого будет сумма
// элементов массива. Добавьте проверки на ввод чисел.

const obj = {};
const n = +prompt();
const arr = [];

for (let i = 0; i < n; i++) {
  const value = +prompt();
  arr.push(value);
}
const sum = arr.reduce((sum, el) => (sum += el), 0);

obj.sum = sum;
console.log(obj);
