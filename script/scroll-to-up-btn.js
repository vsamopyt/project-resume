import {positionElementFromRight} from "./utils.js";
const scrollToUpBtn = document.querySelector(".btn-scroll-to-top");

const handleScroll = () => {
  scrollToUpBtn.classList.toggle("show", window.scrollY > 300);
};

const handleClick = () => {
  // Variant 1
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Variant 2
  // window.scrollTo(0, 0,{behavior: 'smooth'});
};

const positionScrollUpBtn = () => {
  positionElementFromRight(scrollToUpBtn);
}
 
export const setupScrollToUpBtnListeners =() =>{
  window.addEventListener("load", positionScrollUpBtn);
  window.addEventListener("resize", positionScrollUpBtn);
  scrollToUpBtn.addEventListener("click", handleClick);
  window.addEventListener("scroll", handleScroll);
}
