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
    if (typeof jogador !== "string" || typeof email !== "string") {
      console.log("Os dados informados não estão no formato correto.");
      return;
    }
    this.jogador = jogador;
    this.email = email;
    this.jogos = [];
    this.amigos = [];
  }
  tempoJogado() {
    let totalMinutos = 0;
    for (let jogo of this.jogos) {
      if (typeof jogo.fasesConcluidas === "number" && typeof jogo.dificuldade === "number") {
        totalMinutos += jogo.fasesConcluidas * 10 * jogo.dificuldade;
      }
    }
    return Math.round(totalMinutos);
  }
  zerados() {
    let quantidadeZerados = 0;
    for (let jogo of this.jogos) {
      if (typeof jogo.zerado === "boolean" && jogo.zerado === true) {
        quantidadeZerados++;
      }
    }
    return quantidadeZerados;
  }
}
export default PerfilJogador;