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
class Jogo{
    constructor(
    nomeDoJogo,tipo,qtdJogadores,dificuldade,fases,fasesConcluidas,zerado
    ) {
        if (
      typeof(tipo) !== "string"
      || typeof(nomeDoJogo) !== "string"
      || typeof(qtdJogadores) !== "number"
      || typeof(dificuldade) !== "number"
      || typeof(fases) !== "number"
      || typeof(fasesConcluidas) !== "number"
      || typeof(zerado) !== "boolean"
    ) {
      console.log(`Os dados informados não estão no formato correto`)
      return
    }
        this.tipo=tipo
        this.nomeDoJogo=nomeDoJogo
        this.qtdJogadores=qtdJogadores
        this.dificuldade=dificuldade
        this.fases=fases
        this.fasesConcluidas=fasesConcluidas
        this.zerado=false
    }
    jogar(minutos){
        const fasesFeitas = Math.floor((minutos / 10) / this.dificuldade)
        this.fasesConcluidas += fasesFeitas
        if(this.fasesConcluidas === this.fases){
            this.zerado = true
        }
    }
}

export default Jogo