function validarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(numero)) {
        mensagem.innerHTML = 'Por favor, insira um número válido.';
    } else if (numero < 0 || numero > 1000) {
        mensagem.innerHTML = 'O número deve estar entre 0 e 1000.';
    } else {
        mensagem.innerHTML = 'Número válido: ' + numero;
    }
}