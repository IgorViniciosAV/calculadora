
const botaoTema = document.querySelector('#botao-tema');
const html = document.querySelector('html');
const elementosParaMudarCorTexto = document.querySelectorAll('.ligth');

botaoTema.addEventListener('change', () => {
    mudarTema()
    corrigirCoresDeTextos()
});

function mudarTema() {
    html.classList.toggle('modo-claro');
}

function corrigirCoresDeTextos() {
    elementosParaMudarCorTexto.forEach((elemento) => {
        if (botaoTema.checked) {
            elemento.style.color = 'var(--cor-texto-secundario)'
        } else {
            elemento.style.color = 'var(--cor-texto-primario)'
        }
    })
}
