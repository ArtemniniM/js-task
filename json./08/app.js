// 8. Создай поля для name и email, и кнопку "Создать пользователя".
// При клике на кнопку отправь POSTзапрос на https://reqres.in/api/users и выведи ID и дату создания. Добавить валидацию на ввод

document.querySelector("button").addEventListener("click", async () => {
  const name = document.querySelector("#userName").value;
  const email = document.querySelector("#userEmail").value;
  const ul = document.querySelector("ul");
  const object = {
    name,
    email,
  };
  try {
    if (name.value === "") throw new Error("name length = 0");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("email invalid");
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    const json = await response.json();
    const idItem = document.createElement("li");
    idItem.textContent = `ID: ${json.id}`;

    const dateItem = document.createElement("li");
    dateItem.textContent = `Дата создания: ${json.createdAt}`;

    ul.appendChild(idItem);
    ul.appendChild(dateItem);
  } catch (error) {
    console.log(error.message);
  }
});
