/*
 * [ATV 01 - Jogo]
 *
 * Crie e exporte por padrão uma classe chamada "Jogo" que ao ser 
 * usada para criar um objeto, criará com as propriedades abaixo:
 * 
 * nomeDoJogo: texto,
 * tipo: texto,
 * qtdJogadores: numero inteiro,
 * dificuldade: numero de 1 a 5,
 * fases: numero inteiro,
 * fasesConcluidas: numero inteiro iniciado em zero,
 * zerado: booleano iniciado em false
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */

class Jogo {
    constructor(
        nomeDoJogo, tipo, qtdjogadores, dificuldade, fases
    ) {
        this.nomeDoJogo = nomeDoJogo
        this.tipo = tipo
        this.fasesConcluidas = 0
        this.zerado = false
    }
}

const jogo1 = new Jogo("Kirby", "ação", 2, 1, 20)
const jogo2 = new Jogo("Sonic 1", "plataforma", 1, 3, 18)

console.log(jogo1)

Kirby {
    nomeDoJogo: "Kirby",
    tipo: "ação",
    fasesConcluidas: 0,
    zerado: false
}

Sonic 1 {
    nomeDoJogo: "Sonic 1",
    tipo: "plataforma",
    fasesConcluidas: 0,
    zerado: false
}