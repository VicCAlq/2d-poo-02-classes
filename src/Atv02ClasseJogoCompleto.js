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
  constructor (nomeDoJogo, tipo, qtdJogadores, dificuldade, fases) 
  {
    this.nomeDoJogo = nomeDoJogo;
    this.tipo = tipo;
    this.qtdJogadores = qtdJogadores;
    this.dificuldade = dificuldade;
    this.fases = fases;
    this.fasesConcluidas = 0;
    this.zerado = false
  }

jogar(minutos) {
this.fasesConcluidas += minutos / 10 / this.dificuldade
if (this.fasesConcluidas >= this.fases) {
 this.fasesConcluidas = this.fases
 this.zerado = true
}
}

}
 

export const jogo1 = new Jogo("Fortnite", "Battle Royale", 100, 4, 8);
export const jogo2 = new Jogo("GTA 6", "Ação/Aventura", 100, 4, 8);

export default Jogo