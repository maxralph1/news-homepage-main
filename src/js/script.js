let menu = document.querySelector('#menu');
let close = document.querySelector('#close');
let nav = document.querySelector('nav');

console.log(menu)
console.log(close)
console.log(nav)

menu.addEventListener('click', () => {
    nav.classList.remove('hidden');
    // nav.classList.add('flex');
});

close.addEventListener('click', () => {
    nav.classList.add('hidden');
    // nav.classList.remove('flex');
});


// const initApp = () => {
    // const hamburgerBtn = document.getElementById('hamburger-button')
    // const mobileMenu = document.getElementById('mobile-menu')

    // const toggleMenu = () => {
    //     mobileMenu.classList.toggle('hidden')
    //     mobileMenu.classList.toggle('flex')
    //     hamburgerBtn.classList.toggle('toggle-btn')
    // }

    // hamburgerBtn.addEventListener('click', toggleMenu)
    // mobileMenu.addEventListener('click', toggleMenu)

    // let menu = document.getElementById('menu');
    // let close = document.getElementById('close');
    // let nav = document.querySelector('nav');

    // menu.addEventListener('click', () => {
    //     nav.classList.remove('hidden');
    //     nav.classList.add('block');
    // });

    // close.addEventListener('click', () => {
    //     nav.classList.add('hidden');
    //     nav.classList.remove('block');
    // });
// }

// document.addEventListener('DOMContentLoaded', initApp)