"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Lo sabía, te amo muchisimo";  // Cambio de título
  buttonsContainer.classList.add("hidden");  // Ocultar los botones
  changeImage("Si");  // Cambiar la imagen cuando se hace clic en "Sí"
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "¿Estás segura?",
    "Venga porfa",
    "No me quieres :(",
    "Me estás rompiendo el corazón",
    "Me vas hacer llorar",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (image === "Si") {
    catImg.src = "img/cat-si.jpg";  // Asegúrate de que esta imagen exista en tu carpeta
  } else {
    catImg.src = `img/cat-${image}.jpg`;
  }
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
