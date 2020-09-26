var prev = document.getElementById("prev");
var next = document.getElementById("next");
var hero = document.getElementById("hero");
var ham = document.getElementById("ham");
var mobile = document.getElementById("mobile");
var logo = document.getElementById("logo");
var list = document.getElementById("list");
var current = 1;
var cross = false;
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
ham.addEventListener("click", function () {
    if (!cross) {
        ham.src = "./images/icon-close.svg";
        logo.style.display = "none";
        mobile.style.backgroundColor = "white";
        list.style.display = "flex";
        cross = true;
    }
    else {
        ham.src = "./images/icon-hamburger.svg";
        mobile.style.backgroundColor = "transparent";
        logo.style.display = "block";
        list.style.display = "none";
        cross = false;
    }
});
