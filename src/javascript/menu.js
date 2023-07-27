const btn = document.querySelector('.header__btn')
const menu = document.querySelector('.header__menu')

btn.addEventListener('click', () => {
  menu.classList.toggle('open')

  btn.innerHTML === 'Menu'
    ? (btn.innerHTML = 'Close')
    : (btn.innerHTML = 'Menu')
})
