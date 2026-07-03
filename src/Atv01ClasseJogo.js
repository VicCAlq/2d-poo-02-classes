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
nomeDoJogo,
tipo,
qtdJogadores, 
dificuldade,
fases,
fasesConcluidas,
zerando,
    )
    {
        this.nomeDoJogo = "UnsainT";
        this.tipo = "SoulsLike";
        this.qtdJogadores = 1;
        this.dificuldade = 5;
        this.fases = 100;
        this.fasesConcluidas = 0;
        this.zerando = false;
    }
}
export default Jogo


