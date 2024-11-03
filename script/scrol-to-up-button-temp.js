
import positionElementFromRight from "./utils.js"

const scrollToUpBtn = document.querySelector('.btn-scroll-to-top');

const handleScroll = () => {
  // Variant 1 using property display
  //   if (window.scrollY > 300) {
  //     scrollToUpBtn.style.display = 'block';
  //   } else {
  //     scrollToUpBtn.style.display = 'none';
  // }

  // Variant 2 using properties opacity and visible to add aniamtion by toggling class
  if (window.scrollY > 300) {
    scrollToUpBtn.classList.add('show');
  } else {
    scrollToUpBtn.classList.remove('show');
  }
};

const handleClick = () => {
  // Variant 1
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Variant 2
  // window.scrollTo(0, 0,{behavior: 'smooth'});
};



export const positionBtnOnLoad = ()=>{window.addEventListener("load", ()=>{positionElementFromRight(scrollToUpBtn) }) };
export const positionBtnOnResize = ()=>{window.addEventListener("resize", ()=>{positionElementFromRight(scrollToUpBtn) } ) };

export const showButton =() =>{
    window.addEventListener('scroll', handleScroll);
}

export const scrollUp =()=> {
    scrollToUpBtn.addEventListener('click', handleClick);
}
