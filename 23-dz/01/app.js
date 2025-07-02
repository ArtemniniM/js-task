const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slide = document.querySelector("#slide");

const images = ["./2-auctions.jpg", "./3-auctions.jpg", "./4-auctions.jpg"];
let current = 0;

function updateSlide() {
  slide.src = images[current];
}

prev.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateSlide();
});

next.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateSlide();
});
