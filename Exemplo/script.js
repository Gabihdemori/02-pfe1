function calculoimc() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        mensagem.innerHTML = 'Por favor, insira valores válidos para altura e peso.';
        return; 
    }

    let imc = peso / (altura * altura);

    if (imc < 18.0) {
        mensagem.innerHTML = 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem.innerHTML = 'Peso Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        mensagem.innerHTML = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        mensagem.innerHTML = 'Obesidade Grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        mensagem.innerHTML = 'Obesidade Grau 2';
    } else {
        mensagem.innerHTML = 'Obesidade Grau 3';
    }
}