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


// perfilJogador.js

class PerfilJogador {
  constructor(jogador, email) {
    this.jogador = jogador; "rose"
    this.email = email;  "rose@brasil"
    this.jogos = []; "sams,fnnaf,poppy time play, skiycraft,boblox"
    this.amigos = []; "nameless207,dandysfan345,herobrine416"
  }
}

export default PerfilJogador;
