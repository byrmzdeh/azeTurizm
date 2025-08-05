window.addEventListener('scroll', function () {
    const header = document.getElementById('header')
    if (window.scrollY > 10) {
        header.classList.add('scrolled')
        console.log('scroll');

    } else {
        header.classList.remove('scrolled')
    }
})


const langIcon = document.getElementById('lang-icon');
const langs = document.getElementById('langs');

let isVisible = false;

langIcon.addEventListener('click', function () {
    if (isVisible) {
        langs.style.height = '0';
    } else {
        langs.style.height = 'auto';
    }
    isVisible = !isVisible;
});



const toggleLink = document.getElementById('toggle-link');
const subMenu = document.getElementById('submenu');
const toggleIcon = document.getElementsByClassName('toggle-icon')


toggleLink.addEventListener('click', function (e) {
    e.preventDefault();

    if (subMenu.style.maxHeight) {
        subMenu.style.maxHeight = null;
        toggleIcon[0].style.transform = 'rotate(0deg)';

    } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        toggleIcon[0].style.transform = 'rotate(180deg)';
    }
});


const bars = document.getElementById('bars')
const resMenu = document.getElementById('res-menu')
const close = document.getElementById('close')

const openMenu = false
bars.addEventListener('click', function () {
    if (openMenu) {
        resMenu.style.display = 'none'
    } else {
        resMenu.style.display = 'block'
    }
    openMenu = !openMenu
})


close.addEventListener('click', function () {
    resMenu.style.display = 'none'
})