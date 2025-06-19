// Функция принимает два параметра a и b, возвращает строку: Сумма чисел <a> и <b> равна <a + b>

const doString = (a, b) => {
  let sum = a + b;
  return `Сумма чисел ${a} и ${b} равна ${sum}`;
};
console.log(doString(5, 4));
