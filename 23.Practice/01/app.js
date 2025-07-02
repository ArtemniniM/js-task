// По нажатию на кнопку заменяйте <h1> с "Добро пожаловать" на "Приятно вас видеть".

const btn = document.querySelector("button");

const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  h1.textContent = "Приятно вас видеть";
});
