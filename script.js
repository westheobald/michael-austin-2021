"use strict";

const navDesktop = document.querySelector(".header__desktop");
const navBtns = document.querySelectorAll(".nav__btn");
const navMobileBtn = document.querySelector(".btn__mobile__menu");
const navMobileMenu = document.querySelector(".mobile__menu");
const navMobile = document.querySelector(".header__mobile");

const tourSection = document.querySelector(".tour__dates");
const aboutSection = document.querySelector(".about");
const contactSection = document.querySelector(".contact");
const heroVideo = document.querySelector("#hero__video");
const allSections = document.querySelectorAll("section");
const newMusic = document.querySelector(".new__music");
const newAlbumBtn = document.querySelector(".new__music__btn");
const musicControls = document.querySelector(".music__controls");
const audioFile = document.querySelector("#new__music--audio");

navDesktop.addEventListener("click", function (e) {
  navBtns.forEach((btn) => btn.classList.remove("nav__btn--active"));
  allSections.forEach((section) => section.classList.add("hidden"));
  if (e.target.className.includes("tour__dates")) {
    e.target.classList.add("nav__btn--active");
    tourSection.classList.remove("hidden");
  }
  if (e.target.className.includes("about")) {
    e.target.classList.add("nav__btn--active");
    aboutSection.classList.remove("hidden");
  }
  if (e.target.className.includes("contact")) {
    e.target.classList.add("nav__btn--active");
    contactSection.classList.remove("hidden");
  }
});

navMobileMenu.addEventListener("click", function (e) {
  document.querySelector(".social__media").classList.add("hiddenFull");
  if (e.target.className.includes("tour__dates")) {
    tourSection.classList.remove("hidden");
    navMobileMenu.classList.add("hidden");
    newMusic.classList.add("hidden");
  }
  if (e.target.className.includes("about")) {
    aboutSection.classList.remove("hidden");
    navMobileMenu.classList.add("hidden");
    newMusic.classList.add("hidden");
  }
  if (e.target.className.includes("contact")) {
    contactSection.classList.remove("hidden");
    navMobileMenu.classList.add("hidden");
    newMusic.classList.add("hidden");
  }
});

navMobileBtn.addEventListener("click", function () {
  let allHiden = 0;
  allSections.forEach((section) => {
    if (section.classList.contains("hidden")) allHiden++;
  });
  document.querySelector(".social__media").classList.remove("hiddenFull");

  if (allHiden < 3) {
    allSections.forEach(function (section) {
      section.classList.add("hidden");
    });
  }
  navMobileMenu.classList.toggle("hidden");
    newMusic.classList.remove("hidden");

});

heroVideo.addEventListener("click", function () {
  navBtns.forEach((btn) => btn.classList.remove("nav__btn--active"));
  allSections.forEach(function (section) {
    section.classList.add("hidden");
  });
  navMobileMenu.classList.add("hidden");
  newMusic.classList.remove("hidden");
  document.querySelector(".social__media").classList.remove("hiddenFull");
});

newAlbumBtn.addEventListener("click", function (e) {
  newMusic.classList.toggle("new__music__moved");
});

musicControls.addEventListener("click", function (e) {
  if (e.target.classList.contains("play")) {
    audioFile.play();
  }
  if (e.target.classList.contains("pause")) {
    audioFile.pause();
  }
});
