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
  constructor(
    jogador, email, jogos, amigos
  ) {
    if (typeof(jogador) !== "string" 
        || typeof(email) !== "string"
        || typeof(jogos) !== "string"
        || typeof(amigos) !== "string"
        ){
            throw new Error("Tipo errado boy")
        }
            this.jogador = jogador
            this.email = email
            this.jogos = jogos
            this.amigos = amigos
            }
    jogar(minutos){
        while (minutos >= 0){
            minutos =- 10
            this.fasesConcluidas += 1/this.dificuldade
        }
        this.fasesConcluidas += (minutos/10)/this.dificuldade
        if (this.fasesConcluidas == this.fases) {
            this.zerado = true
        }
    }
}

const perfilJogador = new PerfilJogador(
    "Rurthraa", "Arthurmachadocorreia0w0@gmail.com", 
)

console.log(PerfilJogador.jogar())
export default PerfilJogador
