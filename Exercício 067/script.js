function encontrarPrimos() {
    const N = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(N) || N < 1) {
        resultado.innerHTML = 'Por favor, insira um número inteiro positivo.';
        return;
    }

    let primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= N; num++) {
        let ehPrimo = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            totalDivisoes++;
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(num);
        }
    }

    resultado.innerHTML = `Números primos entre 1 e ${N}: ${primos.join(', ')}<br>`;
    resultado.innerHTML += `Total de divisões realizadas: ${totalDivisoes}`;
}