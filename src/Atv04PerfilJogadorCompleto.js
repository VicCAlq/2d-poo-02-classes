/*
 * [ATV 04 - Perfil Jogador Completo]
 * 
 * Copie a classe PerfilJgador e a modifique com os métodos abaixo:
 * 
 * tempoJogado: função que retorna um número inteiro: soma do tempo usado 
 *              nas fases concluídas de todos os jogos cadastrados na 
 *              propriedade "jogos",
 * zerados: função que retorna um número inteiro: Quantidade de jogos
 *          marcados como "zerado" dentre os jogos na lista de jogos
 *          deste jogador
 *
 * Lembre-se de exportar a classe "PerfilJogador" no final do arquivo usando
 * "export default PerfilJogador"
 */

class PerfilJogador {
  constructor() {
    this.jogador = "Steve";
    this.email = "steve@minecraft.com";
    this.jogos = [];
    this.amigos = [];
  }

  tempoJogado() {
    let tempoTotal = 0;

    for (let jogo of this.jogos) {
      tempoTotal += jogo.fasesConcluidas;
    }

    return tempoTotal;
  }

  zerados() {
    let totalZerados = 0;

    for (let jogo of this.jogos) {
      if (jogo.zerado === true) {
        totalZerados++;
      }
    }

    return totalZerados;
  }
}

export default PerfilJogador;