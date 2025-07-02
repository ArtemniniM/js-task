// По нажатию на кнопку создайте и покажите изображение с заданным src

const btn = document.querySelector("button");
const img = document.querySelector("img");

btn.addEventListener("click", () => {
  img.src = "./img-2.jpg";
});
