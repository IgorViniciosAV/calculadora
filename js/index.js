const telaCalc = document.querySelector('.texto__tela');
const teclasCalc = document.querySelectorAll('#teclas');
const teclaReset = document.querySelector('#tecla-reset');
const teclaSoma = document.querySelector('#tecla-soma');

digitarNumero();
limparTela()
soma()


function digitarNumero() {
    teclasCalc.forEach((tecla) => {
        tecla.addEventListener('click', () => {
            telaCalc.textContent += tecla.value;
        });
    });
}

function limparTela() {
    teclaReset.addEventListener('click', () => {
        telaCalc.textContent = '';
    });
}

function soma() {
    teclaSoma.addEventListener('click', () => {



    });
}