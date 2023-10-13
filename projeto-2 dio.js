function calcularNivelEExibirMensagem(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    const mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
    return mensagem;
}

// Exemplo de uso da função com 30 vitórias e 10 derrotas
const vitoriasExemplo = 30;
const derrotasExemplo = 10;
const mensagemResultado = calcularNivelEExibirMensagem(vitoriasExemplo, derrotasExemplo);
console.log(mensagemResultado);  // Exibirá: "O Herói tem um saldo de 20 e está no nível de Prata"
