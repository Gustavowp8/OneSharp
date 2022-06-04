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
/*======= compra pacote =======*/
function chamacompra(){
    confirCompraPacote.style.display='block'
}

function fecharcompra(){
    confirCompraPacote.style.display='none'
}

const comprar = document.getElementById('confirmarCompra')
comprar.addEventListener('click', realizarcompra)
function realizarcompra(){
    alert('Indisponivel no momento')
}