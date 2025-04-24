const header = document.querySelectorAll('.header, .header__container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.forEach(el => {el.classList.add('scroll--header')});
  }
  else {
    header.forEach(el => {el.classList.remove('scroll--header')});
  }
}, {passive: true});