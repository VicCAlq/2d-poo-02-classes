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
}

const euzinho = new PerfilJogador("PB", "pb@steam.com", [], [])
euzinho.addAmigos(arthur)
euzinho.jogos.push(j1)

export default PerfilJogador