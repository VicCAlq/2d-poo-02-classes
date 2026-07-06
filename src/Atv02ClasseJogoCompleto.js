/*
 * [ATV 02 - Jogo Completo]
 *
 * Copie a classe da atividade anterior e a modifique com o método abaixo:
 * jogar: método que recebe um argumento "minutos" (número inteiro). 
 * Cada 10 minutos jogados aumenta o valor das fasesConcluidas 
 * em 1 / dificuldade. Quando fasesConcluidas for igual a 
 * fases, zerado muda de false para true.
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */

 class Jogo {
    constructor(nomeDoJogo, tipo, qtdDeJogadores, dificuldade, fases, fasesConcluidas, zerado) {
        this.nomeDoJogo = nomeDoJogo
        this.tipo = tipo
        this.qtdDeJogadores = qtdDeJogadores 
        this.dificuldade = dificuldade
        this.fases = fases

        this.fasesConcluidas = 0
        this.zerado = false
    }

    jogar(minutos) {
        let blocosDe10 = Math.floor(minutos / 10)
        this.fasesConcluidas += blocosDe10 * (1 / this.dificuldade)
        if (this.fasesConcluidas == this.fases) {
            this.zerado = true
        }
    }
 } export default Jogo

