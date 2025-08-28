// 6. Создай поле для ID поста и кнопку "Удалить". При клике на кнопку отправь DELETE-запрос на
// https://jsonplaceholder.typicode.com/posts/{id} и выведи сообщение об успехе.

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const id = document.querySelector("#id").value;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
});
