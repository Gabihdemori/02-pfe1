let totalEleitores;
        let votosCandidato1 = 0;
        let votosCandidato2 = 0;
        let votosCandidato3 = 0;
        let contadorVotos = 0;
        function iniciarEleicao() {
    totalEleitores = parseInt(document.getElementById('numEleitores').value);
    if (isNaN(totalEleitores) || totalEleitores < 1) {
        alert('Por favor, insira um número válido de eleitores.');
        return;
    }
    document.getElementById('votacaoContainer').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    votosCandidato1 = 0;
    votosCandidato2 = 0;
    votosCandidato3 = 0;
    contadorVotos = 0;
}

function registrarVoto() {
    const voto = parseInt(document.getElementById('voto').value);
    if (voto < 1 || voto > 3) {
        alert('Por favor, vote em um candidato válido (1, 2 ou 3).');
        return;
    }

    if (contadorVotos < totalEleitores) {
        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        }
        contadorVotos++;
        document.getElementById('voto').value = ''; 
    }

    if (contadorVotos === totalEleitores) {
        mostrarResultado();
    }
}

function mostrarResultado() {
    document.getElementById('votacaoContainer').style.display = 'none';
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Resultado da Eleição:<br>
                           Candidato 1: ${votosCandidato1} votos<br>
                           Candidato 2: ${votosCandidato2} votos<br>
                           Candidato 3: ${votosCandidato3} votos`;
    resultado.style.display = 'block';
}