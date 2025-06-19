// На входе n — число. Реализуйте 2 функции: pow() — возводит число в степень 2,
// printPow() — выводит результат.

const toPow = (num) => num ** 2;
const printPow = (n) => {
    const res = toPow(n);
    console.log(res);
};
const n = +prompt();
printPow(n);
