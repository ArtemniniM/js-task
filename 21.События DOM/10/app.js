// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const unlockedBtn = document.querySelector(".locked");
const lockedBtn = document.querySelector(".unlocked");
const queryInput = document.querySelector("input");

lockedBtn.addEventListener("click", () => {
  queryInput.disabled = false;
});

unlockedBtn.addEventListener("click", () => {
  queryInput.disabled = true;
});
