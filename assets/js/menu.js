const Menu = document.querySelector('.menu');


let lineTop = document.querySelector('.line1');
let line = document.querySelector('.line2');
let lineButtom = document.querySelector('.line3');


Menu.addEventListener('click', ()=> {
   lineTop.classList.toggle("top");
   line.classList.toggle("centro");
   lineButtom.classList.toggle("buttom");
})

// Selecciona el elemento del menú
const menuIcon = document.querySelector('.menu');

// Selecciona la lista de navegación
const navList = document.querySelector('.list');

// Agrega un evento de clic al menú
menuIcon.addEventListener('click', () => {
    // Alterna la visibilidad de la lista de navegación
    navList.classList.toggle('show');
});