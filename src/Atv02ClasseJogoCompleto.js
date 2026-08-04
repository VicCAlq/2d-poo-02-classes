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
    this.nomeDoJogo = String(nomeDoJogo);
    this.tipo = String(tipo);
    this.qtdJogadores = parseInt(qtdJogadores);
    this.dificuldade = Number(difficulty);
    this.fases = parseInt(fases);
    
    this.fasesConcluidas = 0;
    this.zerado = false;
  }

  jogar(minutos) {

    const blocosDeDezMinutos = Math.floor(parseInt(minutos) / 10);
    
    
    const progressoGanho = blocosDeDezMinutos * (1 / this.dificuldade);
    
  
    this.fasesConcluidas += progressoGanho;

 
    if (this.fasesConcluidas >= this.fases) {
      this.fasesConcluidas = this.fases; 
      this.zerado = true;
    }
  }
}

export default Jogo;