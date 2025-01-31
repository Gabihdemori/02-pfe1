function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        resultado.innerHTML = 'Por favor, insira notas válidas entre 0 e 10.';
        return;
    }

    const media = (nota1 + nota2) / 2;

    if (media === 10) {
        resultado.innerHTML = 'Aprovado com Distinção';
    } else if (media >= 7) {
        resultado.innerHTML = 'Aprovado';
    } else {
        resultado.innerHTML = 'Reprovado';
    }
}