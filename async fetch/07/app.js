// 7. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://api.ipify.org?format=json, получала от сервера ответ с вашим текущим IP-адресом
// и отображала его на странице.

const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  try {
    const response = await fetch("https://api.ipify.org?format=json", { method: "GET" });
    const data = await response.json();
    const p = document.querySelector("p");
    p.textContent = data.ip;
  } catch (error) {
    console.log(error.message);
  }
});
