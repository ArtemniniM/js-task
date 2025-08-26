// 6. Нужно создать кнопку, чтобы при нажатии на неё программа отправляла GET-запрос по
// ссылке https://dog.ceo/api/breeds/image/random, получала от сервера ответ со случайной
// фотографией собаки и отображала это изображение на странице.

const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const photo = document.getElementById("photo");
    photo.src = data.message;
    photo.alt = "Случайная собака";
  } catch (error) {
    console.log("Ошибка загрузки изображения:", error.message);
  }
});
