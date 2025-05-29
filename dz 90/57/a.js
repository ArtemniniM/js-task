// Найти сумму квадратов всех чисел в строке через запятую.
//  Строка: "2,3,4"
//  Использовать: split(","), map (Math.pow(num, 2)), reduce (суммирование)
//  Результат: 29

const str = "2,3,4";
const spl = str.split(",");

const res = spl.map((el) => Math.pow(el, 2)).reduce((sum, elem) => (sum += elem), 0);
console.log(res);
