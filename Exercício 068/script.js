function coletarNotas() {
    const numNotas = parseInt(document.getElementById('numNotas').value);
    const notasContainer = document.getElementById('notasContainer');
    const notasInputs = document.getElementById('notasInputs');
    notasInputs.innerHTML = ''; // Limpa entradas anteriores

    if (isNaN(numNotas) || numNotas < 1) {
        alert('Por favor, insira um número válido de notas.');
        return;
    }

    for (let i = 0; i < numNotas; i++) {
        notasInputs.innerHTML += `<input type="number" class="nota" placeholder="Nota ${i + 1}" step="0.01" required>`;
    }

    notasContainer.style.display = 'block'; // Mostra a seção de notas
}

function calcularMedia() {
    const notas = document.querySelectorAll('.nota');
    let soma = 0;
    let contador = 0;

    notas.forEach(nota => {
        const valor = parseFloat(nota.value);
        if (!isNaN(valor)) {
            soma += valor;
            contador++;
        }
    });

    if (contador === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira pelo menos uma nota válida.';
        return;
    }

    const media = soma / contador;
    document.getElementById('resultado').innerHTML = `A média aritmética das notas é: ${media.toFixed(2)}`;
}