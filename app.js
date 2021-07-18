const hamburgerContainer = document.querySelector("#header_main-nav");
const hamburger = document.querySelector(".header_main-nav--hamburger");
const link = document.querySelectorAll(".header_main-nav--link li");
const aboutMe = document.querySelector("#about-me");
const aboutClick = document.querySelector("#About");
const mySkill = document.querySelector("#Skills");
const skillClick = document.querySelector("#My-skill");
const book = document.querySelector("#My-book");
const bookClick = document.querySelector("#Book");
hamburger.addEventListener('click',  () => {
    hamburgerContainer.classList.toggle("clicked");
    link.forEach((links) => {
        links.classList.toggle("fade");
    })
});
aboutClick.addEventListener('click', () => {
    aboutMe.scrollIntoView(true);
})
skillClick.addEventListener('click', () => {
    mySkill.scrollIntoView(true);
})
bookClick.addEventListener('click', () => {
    book.scrollIntoView(true);
})