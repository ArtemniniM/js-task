// 3. Создай 2 поля для ввода текста, 1 для ввода числа и кнопку "Создать". При клике на кнопку
// отправь POST-запрос на https://jsonplaceholder.typicode.com/posts со следующей структурой
// данных: { "title": ... "body": ..., "userId": ... }. Результат создания отобразить в html

document.querySelector("button").addEventListener("click", async () => {
  const title = document.querySelector("#titleInput").value;
  const body = document.querySelector("#bodyInput").value;
  const userId = document.querySelector("#userId").value;

  const object = {
    title,
    body,
    userId: Number(userId),
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
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = `ID: ${json.id}, Title: ${json.title}, Body: ${json.body}`;
    ul.appendChild(li);
  } catch (error) {
    console.log(error.message);
  }
});
