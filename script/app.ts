const prev = document.getElementById("prev") as HTMLDivElement;
const next = document.getElementById("next") as HTMLDivElement;
const hero = document.getElementById("hero") as HTMLDivElement;
const ham = document.getElementById("ham") as HTMLImageElement;
const mobile = document.getElementById("mobile") as HTMLDivElement;
const logo = document.getElementById("logo") as HTMLParagraphElement;
const list = document.getElementById("list") as HTMLUListElement;

let current = 1;
let cross = false;
let firstImage = "url(../images/desktop-image-hero-1.jpg)";
let secondImage = "url(../images/desktop-image-hero-2.jpg)";
let thirdImage = "url(../images/desktop-image-hero-3.jpg)";

prev.addEventListener("click", () => {
  if (current === 1) {
    hero.style.backgroundImage = thirdImage;
    current = 3;
  } else if (current === 2) {
    hero.style.backgroundImage = firstImage;
    current = 1;
  } else if (current == 3) {
    hero.style.backgroundImage = secondImage;
    current = 2;
  }
});

next.addEventListener("click", () => {
  if (current === 1) {
    hero.style.backgroundImage = secondImage;
    current = 2;
  } else if (current === 2) {
    hero.style.backgroundImage = thirdImage;
    current = 3;
  } else if (current == 3) {
    hero.style.backgroundImage = firstImage;
    current = 1;
  }
});

ham.addEventListener("click", () => {
  if (!cross) {
    ham.src = "./images/icon-close.svg";
    logo.style.display = "none";
    mobile.style.backgroundColor = "white";
    list.style.display = "flex";
    cross = true;
  } else {
    ham.src = "./images/icon-hamburger.svg";
    mobile.style.backgroundColor = "transparent";
    logo.style.display = "block";
    list.style.display = "none";
    cross = false;
  }
});
