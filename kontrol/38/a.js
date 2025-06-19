// Object.keys(): Получите массив ключей объекта {a: 1, b: 2} и результат отобразите в console.log.

// Object.values(): Вычислите сумму значений объекта {x: 10, y: 20, z: 30} и результат отобразите в console.log.

// Object.entries(): Преобразуйте объект {name: "Anna", age: 25} в массив строк вида "ключ=значение" и результат отобразите в console.log.

const obj = { a: 1, b: 2 };
const key = Object.keys(obj);
console.log(key);

const obj1 = { x: 10, y: 20, z: 30 };
const res = Object.values(obj1).reduce((sum, el) => (sum += el), 0);
console.log(res);

const obj2 = { name: "Anna", age: 25 };
const res1 = Object.entries(obj2);
console.log(res1);
