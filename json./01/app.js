// 1. Создай кнопку "Загрузить посты". При клике на кнопку сформируй GET-запрос на
// https://jsonplaceholder.typicode.com/posts и выведи список заголовков постов.

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
  const json = await response.json();

  const res = json.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el.title;
    const list = document.getElementById("todoList");
    list.appendChild(li);
  });
});
