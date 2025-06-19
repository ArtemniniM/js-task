// На входе n — число. Реализуйте 2 функции: isEven() — возвращает true/false,
// printEvenCheck() — выводит, чётное ли число.

const isEven = (n) => {
  return !isNaN(n) && n % 2 === 0;
};

const printEvenCheck = (n) => {
  isNaN(n) ? console.log("error") : console.log(isEven(n) ? "чётное" : "нечётное");
};

const n = +prompt("");
printEvenCheck(n);
