function coletarIdades() {
    const numPessoas = parseInt(document.getElementById('numPessoas').value);
    const idadesContainer = document.getElementById('idadesContainer');
    const idadesInputs = document.getElementById('idadesInputs');
    idadesInputs.innerHTML = ''; // Limpa entradas anteriores

    if (isNaN(numPessoas) || numPessoas < 1) {
        alert('Por favor, insira um número válido de pessoas.');
        return;
    }

    for (let i = 0; i < numPessoas; i++) {
        idadesInputs.innerHTML += `<input type="number" class="idade" placeholder="Idade ${i + 1}" min="0" required>`;
    }

    idadesContainer.style.display = 'block'; // Mostra a seção de idades
}

function calcularMedia() {
    const idades = document.querySelectorAll('.idade');
    let soma = 0;
    let contador = 0;

    idades.forEach(idade => {
        const valor = parseInt(idade.value);
        if (!isNaN(valor) && valor >= 0) {
            soma += valor;
            contador++;
        }
    });

    if (contador === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira pelo menos uma idade válida.';
        return;
    }

    const media = soma / contador;
    let classificacao;

    if (media >= 0 && media <= 25) {
        classificacao = 'jovem';
    } else if (media > 25 && media <= 60) {
        classificacao = 'adulta';
    } else {
        classificacao = 'idosa';
    }

    document.getElementById('resultado').innerHTML = `A média de idade é: ${media.toFixed(2)}. A turma é ${classificacao}.`;
}