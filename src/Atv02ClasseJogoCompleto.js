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
    constructor(
        nomeDoJogo,
        tipo,
        qtdJogadores,  
        dificuldade = [1,2,3,4,5],
        fases,
        fasesConcluidas = 0, // valor padrão caso não seja passado
        zerando = false,     // valor padrão caso não seja passado

    ) {
        this.nomeDoJogo = nomeDoJogo;
        this.tipo = tipo;
        this.qtdJogadores = qtdJogadores;
        this.dificuldade = dificuldade;
        this.fases = fases;
        this.fasesConcluidas = fasesConcluidas;
        this.zerando = zerando;
        
    }
        jogar(minutos){
        if((minutos/this.dificuldade)>=10)
        {
           this.fasesConcluidas+=Math.round((minutos/this.dificuldade)/10);
           if(this.fasesConcluidas>=this.fases){
            this.zerando = true
           }
        }
    } 
}

export default Jogo;