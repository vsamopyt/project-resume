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

window.addEventListener('resize', () => {
  let positioonRight;
  if (window.innerWidth <= 380) {
    positioonRight = 5;
  }
  if (window.innerWidth >= 380 && window.innerWidth <= 760) {
    positioonRight = window.innerWidth / 2 - 320 / 2 - 30;
  }
  if (window.innerWidth >= 790) {
    positioonRight = window.innerWidth / 2 - 720 / 2 - 30;
  }

  scrollToUpBtn.style.right = positioonRight + 'px';
  console.log(window.innerWidth);
});

window.addEventListener('scroll', handleScroll);
scrollToUpBtn.addEventListener('click', handleClick);


