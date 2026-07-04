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


import Jogo, { jogo1, jogo2 } from "./Atv02ClasseJogoCompleto";

class PerfilJogador {
    constructor (jogador, email, jogos, amigos) {
this.jogador = jogador;
this.email = email;
this.jogos = jogos
this.amigos = amigos
    }
}

const jogador1 = new PerfilJogador ("Jailson", "jailsonbipa2@gmail.com", [jogo1] , [] )
const jogador2 = new PerfilJogador ("Matheus", "Matheusdedireita22@gmail.com", [jogo2] , [] )

jogador1.amigos.push(jogador2)
jogador2.amigos.push(jogador1)

export default PerfilJogador;
