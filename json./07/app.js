// 7. Создай поле для ID пользователя и кнопку "Найти посты". При клике на кнопку отправь GET-запрос
// на https://jsonplaceholder.typicode.com/posts?userId={id} и выведи заголовки постов этого
// пользователя.

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const id = document.querySelector("#id").value;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
      method: "GET",
    });
    const json = await response.json();
    json.forEach((el) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      li.textContent = el.title;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error.message);
  }
});
