/*
 * [ATV 03 - Perfil Jogador]
 *
 * Crie e exporte por padrão uma classe chamada "PerfilJogador" que 
 * ao ser usada para criar um objeto, criará com as propriedades abaixo:
 * 
 * jogador: texto,
 * email: texto,
 * jogos: lista de jogos feitos com a classe "Jogo" do exercício anterior,
 * amigos: outros objetos criados pela classe "PerfilJogador",
 *
 * Lembre-se de exportar a classe "PerfilJogador" no final do arquivo usando
 * "export default PerfilJogador"
 */
class PerfilJogador {
  constructor(jogador, email) {
    if (typeof jogador !== "string" || typeof email !== "string") {
      console.log(`Os dados informados não estão no formato correto:
      jogador: texto, email: texto`);
      return;
    }
    this.jogador = jogador;
    this.email = email;
    this.jogos = [];
    this.amigos = [];
  }
}
export default PerfilJogador;