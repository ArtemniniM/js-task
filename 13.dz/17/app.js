// Подсчитать, сколько раз в объекте встречается значение "admin", используя for...in.
// Тестовые данные:
// const roles = { user1: "admin", user2: "user", user3: "admin" };
// Результат: 2

const roles = { user1: "admin", user2: "user", user3: "admin" };
let res = 0;

for (key in roles) {
  if (roles[key] === "admin") {
    res++;
  }
}
console.log(res);
