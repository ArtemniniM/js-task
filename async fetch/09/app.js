// 9. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://randomuser.me/api/, получала от сервера данные случайного пользователя и
// отображала основную информацию на странице (например: полное имя, email, телефон).

const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  try {
    const response = await fetch("https://randomuser.me/api/", { method: "GET" });
    const data = await response.json();
    const results = data.results;
    const list = document.querySelector("ul");

    results.forEach((el) => {
      const name = document.createElement("li");
      const email = document.createElement("li");
      const number = document.createElement("li");
      name.textContent = `${el.name.title}. ${el.name.first} ${el.name.last}`;
      email.textContent = el.email;
      number.textContent = el.phone;
      list.appendChild(name);
      list.appendChild(email);
      list.appendChild(number);
    });
  } catch (error) {
    console.log(error.message);
  }
});
