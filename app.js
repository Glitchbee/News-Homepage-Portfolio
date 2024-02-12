const burgerBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    burgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
}))
