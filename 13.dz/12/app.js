// Подсчитать количество пар ключ-значение в объекте, используя for...in.
// Тестовые данные:
// const settings = { volume: 80, theme: "dark", notifications: true };
// Результат: 3

const settings = { volume: 80, theme: "dark", notifications: true };
let res = 0;

for (key in settings) {
  res++;
}
console.log(res);
