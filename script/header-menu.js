const btnHeaderMenu = document.querySelector(".btn-header-menu");
const modalWindow = document.querySelector(".backdrop");
const btnModalClose = document.querySelector(".btn-modal-close");
const body = document.querySelector("body");
const backdrop = document.querySelector(".backdrop");
const sectionLinks = document.querySelectorAll(".backdrop-item-link");
const contentModal =document.querySelector(".backdrop-modal")
let isMouseOnModalClicked = false;


// base functioms close and open
const clickModalOpen = () => {
    modalWindow.classList.add("is-open");
    body.classList.add("is-scroll");
  };
  
  const clickModalClose = () => {
    modalWindow.classList.remove("is-open");
    body.classList.remove("is-scroll");
  };


//  close backdrop on Escape
const closeModalByKey = (event) => {
  if (event.key === "Escape") {
    clickModalClose();
  }
};

//  close by clicking on backdrop

console.log(isMouseOnModalClicked);


const closeModalByClickBackdrop = (event) => {
  if (!isMouseOnModalClicked && event.target.classList.contains("backdrop")) {
    clickModalClose ();
  }
};


const mouseClickDown =(event)=>{
    console.log(event.target);
    
    console.log(event.target.closest(".backdrop-modal"));
    
    if(event.target.closest(".backdrop-modal")){
        isMouseOnModalClicked=true;
    }
}

const mouseClickUp =() =>{
    isMouseOnModalClicked=false;
}



sectionLinks.forEach((item) => {
  item.addEventListener("click", clickModalClose);
});

btnHeaderMenu.addEventListener("click", clickModalOpen);
btnModalClose.addEventListener("click", clickModalClose);
document.addEventListener("keydown",clickModalClose);
backdrop.addEventListener("click", closeModalByClickBackdrop);
contentModal.addEventListener("mouseup", mouseClickUp);
contentModal.addEventListener("mousedown", mouseClickDown);

