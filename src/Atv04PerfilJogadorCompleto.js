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

import Jogo from "./Atv02ClasseJogoCompleto.js"

const j1 = new Jogo(

)

class PerfilJogador{
    constructor(jogador,email,jogos,amigos){
        if(typeof(jogador) !== "string" ||
        typeof(email) !== "string"
        ){
            console.log(`Os dados informados não estão no formato correto`)
            return
        }

        this.jogador= jogador
        this.email=email
        this.jogos=jogos
        this.amigos=amigos
    }

    addAmigos(amigo){
        this.amigos = this.amigos.push(amigo)
    }

    tempoJogado(tempo){
        let tempoTotal = 0 
        for (jogo in jogos){
            tempoTotal += this.jogos*10*jogos.dificuldade
        }
        return tempoTotal
    }

    zerados(){
        let jogosZeradosTotal = 0 
        for ( jogo in jogos){
            if (jogo.zerado === true) {
                jogosZeradosTotal += 1
            } 
             
        }
        return jogosZeradosTotal
    }
}

const euzinho = new PerfilJogador("PB", "pb@steam.com", [], [])
euzinho.addAmigos(arthur)
euzinho.jogos.push(j1)

export default PerfilJogador