// 2. Создай поле для для ввода текста и кнопку "Создать". При клике на кнопку отправь POST-запрос
// на https://jsonplaceholder.typicode.com/posts со следующей структурой данных в body: { "title":
// "Введенный заголовок", "body": ..., "userId": 1 }

const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  const title = document.querySelector("#titleInput").value;
  const body = document.querySelector("#bodyInput").value;
  const object = {
    title: title,
    body: body,
    userId: 1,
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }
});
