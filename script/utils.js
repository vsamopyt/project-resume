// function for position of element on page from the right side depending on siye od screen
export const positionElementFromRight = (element) => {
  let positionRight;
  const { innerWidth } = window;

  if (innerWidth <= 380) {
    positionRight = 5;
  } else if (innerWidth >= 380 && window.innerWidth <= 760) {
    positionRight = innerWidth / 2 - 320 / 2 - 30;
  } else if (innerWidth >= 761 && innerWidth <= 999) {
    positionRight = innerWidth / 2 - 760 / 2 + 10;
  } else {
    positionRight = innerWidth / 2 - 1000 / 2 + 20;
  }

  element.style.right = positionRight + "px";
};


