const menu = document.getElementById('menu')

function mMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

menu.addEventListener('click', mMenu)

/*==============================*/

function irPerfil(){
    location='prestador.html'
}
