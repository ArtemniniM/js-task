// Функция принимает параметр number, возвращает строку: Число <number> чётное или Число <number> нечётное

const checkChet = (number) => {
  return number % 2 === 0 ? `Число ${number} чётное` : `Число ${number} нечётное`;
};
console.log(checkChet(4));
