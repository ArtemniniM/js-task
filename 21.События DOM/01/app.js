// Необходимо отобразить кнопку с надписью «Нажми на меня». По клику на нее
// вывести alert с сообщением

const val = document.querySelector("button");
val.addEventListener("click", () => {
  alert("Message");
});
