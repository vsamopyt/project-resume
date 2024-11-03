// Selecting DOM elements
const btnHeaderMenu = document.querySelector(".btn-header-menu");
const modalWindow = document.querySelector(".backdrop");
const btnModalClose = document.querySelector(".btn-modal-close");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const sectionLinks = document.querySelectorAll(".backdrop-item-link");
const contentModal = document.querySelector(".backdrop-modal");
let isMouseOnModalClicked = false;

// Function to open the modal
export const clickModalOpen = () => {
  modalWindow.classList.add("is-open");
  body.classList.add("is-scroll");
};

// Function to close the modal
export const clickModalClose = () => {
  modalWindow.classList.remove("is-open");
  body.classList.remove("is-scroll");
};

// Close modal when pressing Escape key
const closeModalByKey = (event) => {
  if (event.key === "Escape") {
    clickModalClose();
  }
};

// Close modal when clicking on the backdrop
const closeModalByClickBackdrop = (event) => {
  if (!isMouseOnModalClicked && event.target.classList.contains("backdrop")) {
    clickModalClose();
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

// Adding event listeners
export const setupModalEventListeners = () => {
  sectionLinks.forEach((item) => {
    item.addEventListener("click", clickModalClose);
  });
  btnHeaderMenu.addEventListener("click", clickModalOpen);
  btnModalClose.addEventListener("click", clickModalClose);
  document.addEventListener("keydown", clickModalClose);
  backdrop.addEventListener("click", closeModalByClickBackdrop);
  contentModal.addEventListener("mouseup", mouseClickUp);
  contentModal.addEventListener("mousedown", mouseClickDown);
};
