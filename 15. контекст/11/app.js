// На входе n — число. Реализуйте 2 функции: factorial() — возвращает факториал
// числа, printFactorial() — выводит факториал.

const n = +prompt("");

const factorial = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

const printFactorial = (num) => {
  console.log(`factorial ${num}: ${factorial(num)}`);
};
printFactorial(n)