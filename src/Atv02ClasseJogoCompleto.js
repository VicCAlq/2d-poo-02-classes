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
    constructor(nomeDoJogo, tipo, qtdJogadores, difficulty, fases) {
        this.nomeDoJogo = nomeDoJogo;
        this.tipo = tipo;
        this.qtdJogadores = parseInt(qtdJogadores);
        this.dificuldade = Math.min(Math.max(parseInt(difficulty), 1), 5); // Garante que fique entre 1 e 5
        this.fases = parseInt(fases);
        this.fasesConcluidas = 0;
        this.zerado = false;
    }

    jogar(minutos) {
        // Calcula quantas repetições de 10 minutos foram jogadas
        const blocosDeDez = Math.floor(minutos / 10);
        
        // Cada bloco de 10 minutos aumenta o progresso em (1 / dificuldade)
        this.fasesConcluidas += blocosDeDez * (1 / this.dificuldade);

        // Se atingir ou passar o total de fases, o jogo é zerado
        if (this.fasesConcluidas >= this.fases) {
            this.zerado = true;
        }
    }
}

export default Jogo;
