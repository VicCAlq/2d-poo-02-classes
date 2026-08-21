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
  constructor(
    jogador, email, jogos, amigos
  ) {
    if (typeof(jogador) !== "string" 
        || typeof(email) !== "string"
        || typeof(jogos) !== Array.isArray(jogos)
        || typeof(amigos) !== Array.isArray(amigos)
        ){
            throw new Error("Tipo errado boy")
        }
            this.jogador = jogador
            this.email = email
            this.jogos = jogos
            this.amigos = amigos
            }

    tempoJogador(){
        let soma = 0
        let i = 0
        while (i <= this.jogos.length()){
            soma += this.jogos[i].fasesConcluidas * this.jogos[i].dificuldade * 10;
            i++
        }
        return soma
    }

    zerados(){
        let quant = 0
        let i = 0
        while (i <= this.jogos.length()){
            if (this.jogos[i].zerado == true){
           quant++ 
            }
            i++
        }
        return quant
    }
}
const perfilJogador = new PerfilJogador(
    "Rurthraa", "Arthurmachadocorreia0w0@gmail.com", [], []
)
const jogadorAmigo = new PerfilJogador(
    "Rurthraa", "Arthurmachadocorreia0w0@gmail.com", [] 
)
perfilJogador.amigos.push(jogadorAmigo)


const j1 = new Jogo()
perfilJogador.jogos.push(j1)

console.log(PerfilJogador.jogar())
export default PerfilJogador
