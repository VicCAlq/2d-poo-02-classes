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
nomeDoJogo,
tipo,
qtdJogadores, 
dificuldade,
fases,
fasesConcluidas,
zerando,
jogar,
    )
    {
        this.nomeDoJogo = "UnsainT";
        this.tipo = "SoulsLike";
        this.qtdJogadores = 1;
        this.dificuldade = 5;
        this.fases = 100;
        this.fasesConcluidas = 25;
        this.zerando = false;
        this.jogar = 125
    }
}
export default Jogo
