const telaCalc = document.querySelector('.texto__tela');
const teclasCalc = document.querySelectorAll('#teclas');
const teclaReset = document.querySelector('#tecla-reset');
const teclaDel = document.querySelector('#tecla-del');
const teclaIgual = document.querySelector('#tecla-igual');
const teclaDivisao = document.querySelector('#teclasDiv');
const teclaMultipli = document.querySelector('#teclasMult');
const teclaPonto = document.querySelector('#teclasPont');


digitarNaTela();
limparTela();
limparUltimoCaractere();
mostrarResultado();

teclaDivisao.addEventListener('click', () => {
    const texto = teclaDivisao.value;
    telaCalc.textContent += texto.replace("/", "÷");
});

teclaMultipli.addEventListener('click', () => {
    const texto = teclaMultipli.value;
    telaCalc.textContent += texto.replace("*", "x");
});

teclaPonto.addEventListener('click', () => {
    const texto = teclaPonto.value;
    telaCalc.textContent += texto.replace(".", ",");
});

function digitarNaTela() {
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

function limparUltimoCaractere() {
    teclaDel.addEventListener('click', () => {
        let conteudoTela = telaCalc.textContent;
        telaCalc.textContent = conteudoTela.substring(0, conteudoTela.length - 1);
    });
}

function mostrarResultado() {
    teclaIgual.addEventListener('click', () => {
        let conteudoTela = telaCalc.textContent.replace('÷', '/').replace('x', '*').replace(',', '.');
        telaCalc.textContent = eval(conteudoTela);
    });
}