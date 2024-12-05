// thema
const body = document.querySelector('body');


// FUNCTIONS
// TO CHANGE STYLE BTN
const handleBtnStyle = function (element) {
  element.classList.toggle('darkBtn');
  
};

//  TO CHANGE STYLE ICONS
const handleBtnIconStyle = (elements, activeClass) => {
  elements.forEach(item => {
    item.classList.toggle(activeClass);
  });
};

// TO CHECK THEME
const checkTheme =(element, elements, activeClass) =>{
    const localStorageTheme =localStorage.getItem("theme");
 
    if(localStorageTheme === "dark") {
        element.classList.add("darkBtn")
        elements.forEach(item => {
            item.classList.toggle(activeClass);
            body.classList.add("dark-theme")
          });

}};

// save in localStorage
const saveThemeToLocalStorage =() => {
     const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

// TO SET THEME
const handleThema = () => {
    body.classList.toggle("dark-theme");
}

// SET ALL FUNCTIONS
const toggleBtnOne = function (element, elements, activeClass) {
  handleThema(); 
  handleBtnStyle(element);
  handleBtnIconStyle(elements, activeClass);
  saveThemeToLocalStorage()

}

const btnTwo = document.querySelector('.btn-two-theme');
const btnTwoIcons = document.querySelectorAll('.btn-two-theme-icon');

// checkTheme(btnTwo, btnTwoIcons, 'schow');
// btnTwo.addEventListener('click', () => {
//   toggleBtnOne(btnTwo, btnTwoIcons, 'schow');
// });

export const setupDarkLightTheme = () => {
    checkTheme(btnTwo, btnTwoIcons, 'schow');
btnTwo.addEventListener('click', () => {
  toggleBtnOne(btnTwo, btnTwoIcons, 'schow');
});
}
