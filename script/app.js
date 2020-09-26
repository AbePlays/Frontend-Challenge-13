var prev = document.getElementById("prev");
var next = document.getElementById("next");
var hero = document.getElementById("hero");
var current = 1;
var firstImage = "url(../images/desktop-image-hero-1.jpg)";
var secondImage = "url(../images/desktop-image-hero-2.jpg)";
var thirdImage = "url(../images/desktop-image-hero-3.jpg)";
prev.addEventListener("click", function () {
    if (current === 1) {
        hero.style.backgroundImage = thirdImage;
        current = 3;
    }
    else if (current === 2) {
        hero.style.backgroundImage = firstImage;
        current = 1;
    }
    else if (current == 3) {
        hero.style.backgroundImage = secondImage;
        current = 2;
    }
});
next.addEventListener("click", function () {
    if (current === 1) {
        hero.style.backgroundImage = secondImage;
        current = 2;
    }
    else if (current === 2) {
        hero.style.backgroundImage = thirdImage;
        current = 3;
    }
    else if (current == 3) {
        hero.style.backgroundImage = firstImage;
        current = 1;
    }
});
