// Создайте форму для регистрации с полями ввода имени, email и пароля.
// Реализуйте валидацию полей и отображение сообщений об ошибках при
// некорректном вводе.

const name1 = document.querySelector(".name");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const btn = document.querySelector("button");

const checkName = /^[A-Za-z]+$/;
const checkEmail = /^[a-z0-9\.\-\_]+@[a-z0-9]+\.[a-z0-9]+$/i;

btn.addEventListener("click", () => {
  try {
    if (!checkName.test(name1.value)) throw new Error("no valid name");
    if (!checkEmail.test(email.value)) throw new Error("no valid email");
    if (pass.value.length < 8) throw new Error("no valid password");
  } catch (error) {
    console.log(error.message);
  }
});
