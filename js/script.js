document.addEventListener('DOMContentLoaded', function(){

let nav = document.querySelector('.navbar');
let navLink = document.querySelectorAll('.nav-link');
let navList = document.querySelector('.navbar-collapse');

function addShadow() {
    if(window.scrollY >= 200) {
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
}


navLink.forEach(link => link.addEventListener('click', () => navList.classList.remove('show') ))

window.addEventListener('scroll', addShadow)
})


