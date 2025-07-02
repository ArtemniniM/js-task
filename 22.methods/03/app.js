// Удалите элемент с id="old-paragraph" из DOM, предварительно найдя его родительский
// элемент.

const body = document.querySelector("body");
const p = body.querySelector("#old-paragraph");
body.removeChild(p);
