window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const toggler = document.getElementById('navbar-toggler');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-inverse');
        navbar.classList.remove('bg-white');
        toggler.classList.remove('navbar-light');
        toggler.classList.add('navbar-dark');
    } else {
        navbar.classList.add('bg-white');
        navbar.classList.remove('bg-inverse');
        toggler.classList.remove('navbar-dark');
        toggler.classList.add('navbar-light');
    }
});

function handleClick(direction) {
  const list = document.querySelector(".slider");
  const item = document.querySelector(".slider-item");
  const itemWidth = item.offsetWidth;
  
  if(direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
}

function adjustCardWidth() {
  var screenWidth = window.innerWidth;
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    if (screenWidth < 768) {
      card.style.width = '14.5rem';
    } else {
      card.style.width = '28rem';
    }
  });
}
function adjustAboutText() {
  const aboutText = document.getElementById('aboutText');
  if (window.innerWidth < 768) {
    aboutText.classList.remove('fs-5');
    aboutText.classList.add('fs-6');
  } else {
    aboutText.classList.remove('fs-6');
    aboutText.classList.add('fs-5');
  }
}

window.addEventListener('load', function() {
  adjustCardWidth();
  adjustAboutText();
});

window.addEventListener('resize', function() {
  adjustCardWidth();
  adjustAboutText();
});