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
    if (screenWidth <= 768) {
      card.style.width = '18rem';
    } else {
      card.style.width = '28rem';
    }
  });
}
window.addEventListener('load', adjustCardWidth);
window.addEventListener('resize', adjustCardWidth);