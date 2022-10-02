const nav = document.querySelector('#header nav')
const elementToggle = document.querySelectorAll('nav .toggle')


for (const element of elementToggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// quando clicar no item do menu, esconde o menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}



//  const open = document.querySelectorAll('nav .open')
//  const close = document.querySelectorAll('nav .close')
//  const nav = document.querySelectorAll('nav.container')



// function openMenu() {
//   nav.classList.add('show')
// }
  
//   function closeMenu() {
//     nav.classList.remove('show')
// }
