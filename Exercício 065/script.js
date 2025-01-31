function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let ehPrimo = true;

    // Verifica se o número é primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        mensagem.innerHTML = numero + ' é um número primo.';
    } else {
        mensagem.innerHTML = numero + ' não é um número primo.';
    }
}