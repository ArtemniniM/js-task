// Сделай две функции:
// isStrongPassword(pwd) — возвращает true, если пароль ≥ 8 символов
// registerUser(name, pwd) — если isStrongPassword возвращает true,
//  вернуть: "Пользователь <name> зарегистрирован"
// иначе — "Слабый пароль"

const isStrongPassword = (pwd) => {
  return typeof pwd === "string" && pwd.length >= 8;
};
const registerUser = (name, pwd) => {
  return isStrongPassword(pwd) === true ? `Пользователь ${name} зарегистрирован` : "Слабый пароль";
};
console.log(registerUser("artem", "3324"));
