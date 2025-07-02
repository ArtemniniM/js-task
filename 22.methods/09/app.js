// В списке есть несколько <li>. Пройдитесь по ним и, если текст элемента короче 3 символов,
// установите ему красный цвет (style.color = 'red').

const li = document.querySelectorAll("li");

li.forEach((el) => {
  el.textContent.length < 3 ? (el.style.color = "red") : null;
});
