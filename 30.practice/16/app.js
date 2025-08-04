// 3. Класс User: с полем password. Метод isSecure() возвращает true, если длина пароля ≥ 8 и есть хотя бы одна цифра. Дан массив пользователей — выведи всех с небезопасными паролями.
// ; Входные:
// ;
// ; Выходные:
// ; [
// ;   { username: 'admin', password: '1234' },
// ;   { username: 'guest', password: 'guest' },
// ;   { username: 'root', password: 'root' }
// ; ]

const arrUsers = [
  { username: "admin", password: "1234" },
  { username: "user1", password: "mypassword1" },
  { username: "guest", password: "guest" },
  { username: "root", password: "root" },
];

class User {
  username;
  password;
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  isSecure() {
    const template = /^(?=.*\d).{8,}$/;
    return template.test(this.password);
  }
}
const users = arrUsers.map((u) => new User(u.username, u.password));
const insecureUsers = users.filter((user) => !user.isSecure());
const result = insecureUsers.map((u) => ({
  username: u.username,
  password: u.password,
}));
console.log(result);
