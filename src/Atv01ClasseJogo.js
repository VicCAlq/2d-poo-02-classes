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
    constructor (
        nomeDoJogo, tipo, qtdJogadores, dificuldade, fases, fasesConcluidas, zerado
    ) {
        if (typeof(nomeDoJogo) !== "string" 
        || typeof(tipo) !== "string"
        || typeof(qtdJogadores) !== "number"
        || typeof(dificuldade) !== "number"
        || dificuldade < 1 || dificuldade > 5
        || typeof(fases) !== "number"
        || typeof(fasesConcluidas) !== "number"
        || typeof(zerado) !== "boolean")
        {
            throw new Error("Tipo errado boy")
        }
        this.nomeDoJogo = nomeDoJogo
        this.tipo = tipo
        this.qtdJogadores = qtdJogadores
        this.dificuldade = dificuldade
        this.fases = fases
        this.fasesConcluidas = fasesConcluidas ?? 0
        this.zerado = zerado ?? false
    }
}

const meuJogo = new Jogo(
    "Escola", "Terror", 45, 5, 3, 2, false
)

export default Jogo
