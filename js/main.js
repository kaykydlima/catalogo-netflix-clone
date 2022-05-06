(function () {
    const menu = document.querySelector('#menu')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            console.log('funcinou')
            menu.classList.add('scroll')
        } else {
            menu.classList.remove('scroll')
        }
    })
    const menuOpen = document.querySelector('.menu-p')
    const ul = document.querySelector('ul')
    const delMenu = document.querySelector('.menu')
    menuOpen.addEventListener('click', function () {
        if (delMenu.classList.contains('menu') == false) {
            ul.classList.remove('pop-menu')
            ul.classList.add('menu')
        } else {
            ul.classList.remove('menu')
            ul.classList.add('pop-menu')
        }

    })
})()