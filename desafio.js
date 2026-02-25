// Desafio 02 - Lógica de Programação
// Dev: Gabriel Hunger

// O desafio é criar uma função que receba o número de vitórias e derrotas de um herói e retorne o saldo de vitórias e o nível do herói com base nesse saldo. O nível do herói deve ser determinado da seguinte forma:
function calcularSaldoVitorias(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

// Níveis do herói:
function calcularNivel(saldoVitorias) {
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) { 
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

// Função principal que calcula o saldo de vitórias e o nível do herói
function calcularNivelHeroi(vitorias, derrotas) {
    const saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);
    const nivel = calcularNivel(saldoVitorias);
    return { saldoVitorias, nivel };
}

// Exemplo de uso

const resultado = calcularNivelHeroi(70, 5);
console.log("O Herói tem saldo de vitórias de " + resultado.saldoVitorias + " e está no nível " + resultado.nivel);