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
    }}

export default Jogo