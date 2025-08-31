const headInput = document.getElementById("head");
const textInput = document.getElementById("text");
const idInput = document.getElementById("id");
const button = document.querySelector("button");
const success = document.getElementById("success");
const counterEl = document.getElementById("counter");
const container = document.querySelector(".container");

let counter = 0;

button.addEventListener("click", async () => {
  const title = headInput.value;
  const body = textInput.value;
  const userId = idInput.value;

  if (!title || !body) {
    alert("Заполните заголовок и текст поста");
    return;
  }

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId: Number(userId) }),
    });

    const newPost = await res.json();

    success.style.display = "block";

    headInput.value = "";
    textInput.value = "";
    idInput.value = "";

    const postEl = document.createElement("div");
    postEl.innerHTML = `
      <h4>${newPost.title}</h4>
      <p>${newPost.body}</p>
      <p>ID: ${newPost.userId}</p>
    `;
    container.appendChild(postEl);

    counter++;
    counterEl.textContent = counter;

    setTimeout(() => {
      success.style.display = "none";
    }, 4000);
  } catch (error) {
    alert(error.message);
  }
});
