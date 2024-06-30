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

const list = document.querySelector(".slider");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".slider-item");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }