import { positionElementFromRight } from "./utils.js";

// Selecting DOM elements
const btnHeaderMenu = document.querySelector(".btn-header-menu");
// const modalWindow = document.querySelector(".backdrop");
const btnModalClose = document.querySelector(".btn-modal-close");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const sectionLinks = document.querySelectorAll(".backdrop-item-link");
const contentModal = document.querySelector(".backdrop-modal");
let isMouseOnModalClicked = false;

export const toggleModal =() =>{
  backdrop.classList.toggle("is-open");
  body.classList.toggle("is-scroll");
}

// Close modal when pressing Escape key
const closeModalByKey = (event) => {
  if (event.key === "Escape") {
    toggleModal();
  }
};

// Close modal when clicking on the backdrop
const closeModalByClickBackdrop = (event) => {
  if (!isMouseOnModalClicked && event.target.classList.contains("backdrop")) {
    toggleModal();
  }
};

// Track mouse click inside the modal content
const mouseClickDown = (event) => {
  if (event.target.closest(".backdrop-modal")) {
    isMouseOnModalClicked = true;
  }
};

const mouseClickUp = () => {
  isMouseOnModalClicked = false;
};

const positionMenuBtn = ()=>{
  positionElementFromRight(btnHeaderMenu)
}

// Adding event listeners
export const setupModalEventListeners = () => {
  window.addEventListener("load",positionMenuBtn);
  window.addEventListener("resize",positionMenuBtn);
  sectionLinks.forEach((item) => {
    item.addEventListener("click", toggleModal);
  });
  btnHeaderMenu.addEventListener("click", toggleModal);
  btnModalClose.addEventListener("click", toggleModal);
  document.addEventListener("keydown", closeModalByKey);
  backdrop.addEventListener("click", closeModalByClickBackdrop);
  contentModal.addEventListener("mouseup", mouseClickUp);
  contentModal.addEventListener("mousedown", mouseClickDown);
};


