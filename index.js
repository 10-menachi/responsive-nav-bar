const hamburger = document.querySelector('.fa-bars');
hamburger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
    hamburger.classList.toggle('fa-times');
})