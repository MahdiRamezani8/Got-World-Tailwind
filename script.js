const menu = document.getElementById('menu')
const openMenuBtn = document.getElementById('open-menu')
openMenuBtn.addEventListener('click', () => {
    openMenuBtn.classList.toggle('oppend')
    menu.classList.toggle('oppend')
})