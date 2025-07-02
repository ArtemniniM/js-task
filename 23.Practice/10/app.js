// На странице есть форма с двумя полями ввода:
// • первое поле — email
// • второе поле — пароль
// • и кнопка "Войти".
// По клику на кнопку нужно:
// • проверить, что email написан правильно (с помощью регулярного выражения),
// • убедиться, что пароль не пустой и содержит не менее 8 символов.
// Если всё введено верно — выводите сообщение Успешный вход!
// Если есть ошибка — показывайте соответствующее сообщение об ошибке под формой.

const btn = document.querySelector("button");
const inpEmail = document.querySelector(".email");
const inpPass = document.querySelector(".password");
const template = /^[a-z0-9\.\-\_]+@[a-z0-9]+\.[a-z0-9]+$/i;

btn.addEventListener("click", () => {
  try {
    if (!template.test(inpEmail.value)) throw new Error("fake Email");
    else if (inpPass.value.trim().length < 8) throw new Error("fake password");
    alert("Успешный вход!");
  } catch (error) {
    alert(error.message);
  }
});
