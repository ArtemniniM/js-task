async function test() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  const cont = document.querySelector(".container");
  cont.innerHTML = "";

  data.forEach((el) => {
    const p = document.createElement("p");
    p.textContent = el.title + " ";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.dataset.id = el.id;

    const updBtn = document.createElement("button");
    updBtn.textContent = "Update";
    updBtn.className = "update";
    updBtn.dataset.id = el.id;

    p.appendChild(delBtn);
    p.appendChild(updBtn);
    cont.appendChild(p);
  });
}
test();

document.querySelector(".container").addEventListener("click", async (e) => {
  const btn = e.target;
  const id = btn.dataset.id;
  const row = btn.closest("p");

  if (btn.classList.contains("delete")) {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" });
      row.remove();
    } catch (err) {
      console.error("DELETE failed:", err);
    }
  }

  if (btn.classList.contains("update")) {
    const newTitle = prompt("Введите новый заголовок:");

    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle }),
      });
      row.firstChild.textContent = newTitle + " ";
    } catch (err) {
      console.error(err);
    }
  }
});

document.querySelector("#create").addEventListener("click", () => {
  document.querySelector(".createProduct").classList.toggle("viewDisplay");
});

document.querySelector("#send").addEventListener("click", async () => {
  const titleEl = document.querySelector("#title");
  const priceEl = document.querySelector("#price");
  const title = titleEl.value;
  const price = parseFloat(priceEl.value);

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price }),
    });
    const created = await response.json();

    const p = document.createElement("p");
    p.textContent = created.title + " ";

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";
    delBtn.dataset.id = created.id;

    const updBtn = document.createElement("button");
    updBtn.textContent = "Update";
    updBtn.className = "update";
    updBtn.dataset.id = created.id;

    p.appendChild(delBtn);
    p.appendChild(updBtn);
    document.querySelector(".container").appendChild(p);

    titleEl.value = "";
    priceEl.value = "";
    document.querySelector(".createProduct").classList.remove("viewDisplay");
  } catch (err) {
    console.error(err);
  }
});
