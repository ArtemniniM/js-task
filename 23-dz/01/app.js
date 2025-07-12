const slides = [
  {
    img: "2-auctions.jpg",
    title: "Горы на закате",
    description: "Красивый вид на горы во время заката. Отличное место для отдыха.",
  },
  {
    img: "3-auctions.jpg",
    title: "Город ночью",
    description: "Современный мегаполис, сверкающий огнями в ночное время.",
  },
  {
    img: "4-auctions.jpg",
    title: "Морское побережье",
    description: "Уютный пляж с белым песком и прозрачной водой. Идеально для отпуска.",
  },
];

const img = document.querySelector("#slide-img");
const title = document.querySelector("#slide-title");
const desc = document.querySelector("#slide-desc");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let current = 0;

function updateSlide() {
  const slide = slides[current];
  img.src = slide.img;
  title.textContent = slide.title;
  desc.textContent = slide.description;
}
prev.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
});

next.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
});

function showNextSlide() {
  current = (current + 1) % slides.length;
  updateSlide();
}

setInterval(showNextSlide, 3000);
