// 4. Создай поле для названия задачи, поле для числа, чекбокс - поле complited (создается как input type
//     checkbox) и кнопку "Добавить задачу". По клику на кнопку отправь POST-запрос на
//     https://jsonplaceholder.typicode.com/todos со структурой: { "title": ..., "completed": ... (true/ false, значение
//     из чекбокса), "userId": ... } Результат создания отобразить в html

document.querySelector("button").addEventListener("click", async () => {
  const title = document.querySelector("#titleInput").value;
  const completed = document.querySelector("#completedInput").checked;
  const userId = document.querySelector("#userId").value;

  const object = {
    title,
    completed,
    userId: Number(userId),
  };
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const json = await response.json();
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = `title: ${json.title} completed: ${json.completed} userId: ${json.userId}`;
    ul.appendChild(li);
  } catch (error) {
    console.log(error.message);
  }
});
