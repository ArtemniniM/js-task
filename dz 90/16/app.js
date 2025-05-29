// Найти сумму всех элементов массива.
//  Массив: [3, 6, 9]
//  Использовать: reduce
//  Результат: 18

const arr = [3, 6, 9];

const res = arr.reduce(function(sum,el){
return sum+=el
},0)
console.log(res);
