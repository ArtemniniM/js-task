// На странице есть список <ul>, поле ввода и кнопка. Добавляйте в список только те значения,
// которые являются корректными email-адресами (с помощью регулярного выражения). Если
// email невалиден — бросьте исключение с соответствующим сообщением.

const btn = document.querySelector("button");
const val = document.querySelector("input");
const ul = document.querySelector("ul");
const template = /^[a-zA-Z0-9\.\-\_]+\@[a-z]+\.[a-z]{1,5}/;

btn.addEventListener("click", () => {
  try {
    const text = val.value;
    const li = document.createElement("li");
    li.textContent = text;
    if (!template.test(text)) throw new Error("email невалиден");
    ul.appendChild(li);
  } catch (error) {
    console.log(error.message);
  }
});
