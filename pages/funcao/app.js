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
    location='carteira.html'
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

/*====== editar perfil ======*/

const editar = document.getElementById('editarperfil')
editar.addEventListener('click', irParaeditar)
function irParaeditar(){
    location='editarperfil.html'
}

/*==============================*/
function alteraftperfil(){
    enviafotoeno.style.display='block'
}
function fecharftperfil(){
    enviafotoeno.style.display='none'
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#file_upload') 
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}