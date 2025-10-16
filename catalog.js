const cards = document.querySelectorAll(".card");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentImages = [];
let currentIndex = 0;

cards.forEach((card) => {
  card.addEventListener("click", () => {
    currentImages = JSON.parse(card.getAttribute("data-images"));
    currentIndex = 0;
    showImage();
    lightbox.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage();
});

function showImage() {
  lightboxImg.src = currentImages[currentIndex];
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
