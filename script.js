window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const toggler = document.getElementById('navbarToggler');
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

function adjustResponsiveElements() {
    const envelopeIcon = document.getElementById('envelopeIcon');
    const textElements = document.querySelectorAll('#emailInfo1, #emailInfo2');

    if (window.innerWidth < 768) {
        envelopeIcon.setAttribute('width', '50');
        envelopeIcon.setAttribute('height', '50');
        
        textElements.forEach(el => {
        el.classList.remove('fs-4');
        el.classList.add('fs-6');
        });
    } else {
        envelopeIcon.setAttribute('width', '75');
        envelopeIcon.setAttribute('height', '75');
        
        textElements.forEach(el => {
        el.classList.remove('fs-6');
        el.classList.add('fs-4');
        });
    }
}

window.addEventListener('resize', adjustResponsiveElements);
window.addEventListener('load', adjustResponsiveElements);