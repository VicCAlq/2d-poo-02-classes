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
class PerfilJogador 
{
  constructor(
    jogador, email, jogos, amigos
  ) { 

    if (typeof(jogador) !== "string" 
        || typeof(email) !== "string"
        || typeof(jogos) !== Array.isArray(jogos)
        || typeof(amigos) !== Array.isArray(amigos)

        ){
            throw new Error("Errado cara")

        }
            this.jogador = jogador
            this.email = email
            this.jogos = jogos
            this.amigos = amigos
    }
}


const perfilJogador = new PerfilJogador(
    "kaykay", "kaylanemarinho17@gmail.com", [], []
)
const jogadorAmigo = new PerfilJogador(
    "Kaykay", "kaylanemarinho17@gmail.com", [] 
)
perfilJogador.amigos.push(jogadorLegal)




const j1 = new Jogo()
perfilJogador.jogos.push(j1)

console.log(PerfilJogador.jogar())
export default PerfilJogador