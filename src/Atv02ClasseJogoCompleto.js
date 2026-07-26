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
  constructor(nomeDoJogo, tipo, qtdJogadores, dificuldade, fases) {
    if (
      typeof nomeDoJogo !== "string" ||
      typeof tipo !== "string" ||
      typeof qtdJogadores !== "number" ||
      typeof dificuldade !== "number" ||
      dificuldade < 1 ||
      dificuldade > 5 ||
      typeof fases !== "number"
    ) {
      console.log("Os dados informados não estão no formato correto.");
      return;
    }
    this.nomeDoJogo = nomeDoJogo;
    this.tipo = tipo;
    this.qtdJogadores = qtdJogadores;
    this.dificuldade = dificuldade;
    this.fases = fases;
    this.fasesConcluidas = 0;
    this.zerado = false;
  }
  jogar(minutos) {
    if (typeof minutos !== "number" || minutos <= 0) {
      console.log("Por favor, informe uma quantidade válida de minutos.");
      return;
    }
    this.fasesConcluidas += minutos / (10 * this.dificuldade);
    if (this.fasesConcluidas >= this.fases) {
      this.fasesConcluidas = this.fases;
      this.zerado = true;
    }
  }
}
export default Jogo;