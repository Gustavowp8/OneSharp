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

function irInicio(){
    location='pageInicial.html'
}

function irPagamentos(){
    location='pagamentos.html'
}

function irMsg(){
    location='mesagens.html'
}

function irUser(){
    location='perfiluser.html'
}

function verMsg(){
    location='trocademsg.html'
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


/*====== função da mensagens ======*/

function processarMsg(){
    const textoMsg = document.getElementById('cMsg').value
    balaomsgusuariodois.style.display='block'
    txtuserRecebe.innerHTML = textoMsg;
}