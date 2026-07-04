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

import Jogo from "./Atv01ClasseJogo";

class PerfilJogador {
    constructor (jogador, email, jogos, amigos) {
this.jogador = jogador;
this.email = email;
this.jogos = [jogo1, jogo2]
this.amigos = amigos
    }
}

const jogador1 = new PerfilJogador ("Jailson", "jailsonbipa2@gmail.com", jogo1 , [] )
const jogador2 = new PerfilJogador ("Matheus", "Matheusdedireita22@gmail.com", jogo2 , [] )

jogador1.push(jogador2)
jogador2.push(jogador1)

export default PerfilJogador;