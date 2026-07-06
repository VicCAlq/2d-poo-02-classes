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

import Jogo from "./Atv02ClasseJogoCompleto"

class PerfilJogador {
    constructor (jogador, email) {
        this.jogador = jogador
        this.email = email
        
        this.jogos = []
        this.amigos = []
    } 

    tempoJogado() {
        let tempoFinal = 0
        for (let jogo of this.jogos) {
            tempoFinal += jogo.fasesConcluidas / (1 / jogo.dificuldade) * 10
        } return tempoFinal
    } 
    zerados() {
        let qtdDeZerados = 0
        for (let jogo of this.jogos) {
            if (jogo.zerado == true) {
                qtdDeZerados++
            }
        } return qtdDeZerados
    }
} export default PerfilJogador