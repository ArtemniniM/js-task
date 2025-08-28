// 5. Создай поле для ID пользователя, поле для email и кнопку "Обновить". При клике на кнопку отправь
// PUT-запрос на https://jsonplaceholder.typicode.com/users/{id} с новым email и выведи результат

document.querySelector("button").addEventListener("click", async () => {
  const userId = document.querySelector("#userId").value;
  const email = document.querySelector("#userEmail").value;
  const object = {
    userId,
    email,
  };
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const json = await response.json();
    console.log(json);

    const li = document.querySelector("li");
    li.textContent = `id: ${json.userId} email: ${json.email}`;
  } catch (error) {
    console.log(error.message);
  }
});
