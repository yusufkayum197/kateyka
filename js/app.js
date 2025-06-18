"use strict";

const hamburgerIcon = document.querySelector(".hamburger__icon");
const closeIcon = document.querySelector(".close__icon");
const header__list = document.querySelector(".header__list");

hamburgerIcon.addEventListener('click', () =>{
    closeIcon.style.display = "block";
    header__list.style.display = "block" ;
    hamburgerIcon.style.display = "none";
});

closeIcon.addEventListener('click', () =>{
    closeIcon.style.display = "none";
    header__list.style.display = "none";
    hamburgerIcon.style.display = "block";
});