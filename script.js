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

function updateVisibility() {
  const techContainer = document.getElementById('techWrapper');
  const cards = Array.from(techContainer.getElementsByClassName('tech-card'));
  cards.forEach((card, index) => {
    if (window.innerWidth <= 454) {
      if (index >= 10) {
        card.classList.add('hidden');
      } else {
        card.classList.remove('hidden');
      }
    } else {
      card.classList.remove('hidden');
    }
  });
}

function moreOrLessButton() {
  const techContainer = document.getElementById('techWrapper');
  const toggleButton = document.getElementById('moreOrLess');
  const cards = Array.from(techContainer.getElementsByClassName('tech-card'));

  if (toggleButton.textContent === 'Show More') {
    cards.forEach(card => card.classList.remove('hidden'));
    toggleButton.textContent = 'Show Less';
    toggleButton.removeAttribute('href', '#tech');
  } else {
    updateVisibility();
    toggleButton.textContent = 'Show More';
    toggleButton.setAttribute('href', '#tech');
  }
}

function checkScreenWidth() {
  const toggleButton = document.getElementById('moreOrLess');
  if (window.innerWidth < 454) {
    toggleButton.style.display = 'block';
    updateVisibility();
  } else {
    toggleButton.style.display = 'none';
  }
}

window.addEventListener('load', function() {
  adjustCardWidth();
  adjustAboutText();
  checkScreenWidth();
});

window.addEventListener('resize', function() {
  adjustCardWidth();
  adjustAboutText();
  checkScreenWidth();
});

document.getElementById('moreOrLess').addEventListener('click', moreOrLessButton);