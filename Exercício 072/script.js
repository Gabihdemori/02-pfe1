function exibirDia() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    switch (numero) {
        case 1:
            resultado.innerHTML = 'Domingo';
            break;
        case 2:
            resultado.innerHTML = 'Segunda-feira';
            break;
        case 3:
            resultado.innerHTML = 'Terça-feira';
            break;
        case 4:
            resultado.innerHTML = 'Quarta-feira';
            break;
        case 5:
            resultado.innerHTML = 'Quinta-feira';
            break;
        case 6:
            resultado.innerHTML = 'Sexta-feira';
            break;
        case 7:
            resultado.innerHTML = 'Sábado';
            break;
        default:
            resultado.innerHTML = 'Valor inválido. Por favor, digite um número entre 1 e 7.';
    }
}
