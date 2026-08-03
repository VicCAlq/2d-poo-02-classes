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
  constructor(jogador, email) {
    this.jogador = String(jogador);
    this.email = String(email);
    this.jogos = []; 
    this.amigos = []; 
  }


  tempoJogado() {
    let totalMinutos = 0;

    for (const jogo of this.jogos) {
      
      const tempoDesseJogo = jogo.fasesConcluidas * jogo.dificuldade * 10;
      totalMinutos += tempoDesseJogo;
    }

    return Math.floor(totalMinutos);
  }


  zerados() {
    let quantidadeZerados = 0;

    for (const jogo of this.jogos) {
      if (jogo.zerado === true) {
        quantidadeZerados++;
      }
    }

    return quantidadeZerados;
  }
}

export default PerfilJogador;