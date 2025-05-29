// Удалить все свойства, значения которых равны null, используя for...in.
// Тестовые данные:
// const obj = { a: 1, b: null, c: 3, d: null };
// Результат:
// { a: 1, c: 3 }

const obj = { a: 1, b: null, c: 3, d: null };

for (key in obj) {
  if (obj[key] === null) {
    delete obj[key];
  }
}
console.log(obj);
