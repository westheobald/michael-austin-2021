"use strict";

const navBtns = document.querySelectorAll(".nav__btn");

const navDesktop = document.getElementById("nav__desktop");

const navMobile = document.getElementById("nav__mobile");
const navMobileBtn = document.getElementById("btn__mobile__menu");
const navMobileMenu = document.getElementById("mobile__menu");

const backgroundVideo = document.getElementById("background__video");

const allSections = document.querySelectorAll("section");
const aboutSection = document.getElementById("about");
const tourSection = document.getElementById("tour__dates");
const contactSection = document.getElementById("contact");

const newMusic = document.querySelector(".new__music");
const newAlbumBtn = document.getElementById("new__music__btn");
const musicControls = document.getElementById("music__controls");
const audioFile = document.getElementById("new__music__audio");

const socialMedia = document.getElementById("social__media");

navDesktop.addEventListener("click", function (e) {
  navBtns.forEach((btn) => btn.classList.remove("nav__btn--active"));
  allSections.forEach((section) => section.classList.add("hidden"));
  if (e.target.id.includes("tour__dates")) {
    e.target.classList.add("nav__btn--active");
    tourSection.classList.remove("hidden");
  }
  if (e.target.id.includes("about")) {
    e.target.classList.add("nav__btn--active");
    aboutSection.classList.remove("hidden");
  }
  if (e.target.id.includes("contact")) {
    e.target.classList.add("nav__btn--active");
    contactSection.classList.remove("hidden");
  }
});

navMobileMenu.addEventListener("click", function (e) {
  socialMedia.classList.add("hiddenFull");
  if (e.target.id.includes("tour__dates")) {
    tourSection.classList.remove("hidden");
    navMobileMenu.classList.add("hidden");
    newMusic.classList.add("hidden");
  }
  if (e.target.id.includes("about")) {
    aboutSection.classList.remove("hidden");
    navMobileMenu.classList.add("hidden");
    newMusic.classList.add("hidden");
  }
  if (e.target.id.includes("contact")) {
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
  socialMedia.classList.remove("hiddenFull");
  if (allHiden < allSections.length) {
    allSections.forEach(function (section) {
      section.classList.add("hidden");
    });
  }
  navMobileMenu.classList.toggle("hidden");
  newMusic.classList.remove("hidden");
});

backgroundVideo.addEventListener("click", function () {
  navBtns.forEach((btn) => btn.classList.remove("nav__btn--active"));
  allSections.forEach(function (section) {
    section.classList.add("hidden");
  });
  navMobileMenu.classList.add("hidden");
  newMusic.classList.remove("hidden");
  socialMedia.classList.remove("hiddenFull");
});

newAlbumBtn.addEventListener("click", function () {
  newMusic.classList.toggle("new__music__moved");
});

musicControls.addEventListener("click", function (e) {
  console.log("click")
  if (e.target.id === "play") {
    audioFile.play();
  }
  if (e.target.id === "pause") {
    audioFile.pause();
  }
});