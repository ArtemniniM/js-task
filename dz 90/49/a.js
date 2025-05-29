// Из строки цифр получить сумму только чётных.
//  Строка: "123456"
//  Использовать: split(""), map(Number), filter (% 2 === 0), reduce (суммирование)
//  Результат: 12

const str = "123456";
const spl = str.split("");
const res = spl.map(Number).filter((el) => el % 2 === 0).reduce((sum,elem)=>sum+=elem,0);
console.log(res);
