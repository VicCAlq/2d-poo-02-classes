/*
 * [ATV 02 - Jogo Completo]
 *
 * Copie a classe da atividade anterior e a modifique com o método abaixo:
 * jogar: método que recebe um argumento "minutos" (número inteiro). 
 * Cada 10 minutos jogados aumenta o valor das fasesConcluidas 
 * em 1 / dificuldade. Quando fasesConcluidas for igual a 
 * fases, zerado muda de false para true.
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */

class Jogo {
  constructor(
    nomeDoJogo, tipo, qtdJogadores, dificuldade, fases, fasesConcluidas, zerado
  ) {
    if (typeof(nomeDoJogo) !== "string" 
            || typeof(tipo) !== "string"
            || typeof(qtdJogadores) !== "number"
            || typeof(dificuldade) !== "number"
            || dificuldade < 1 || dificuldade > 5
            || typeof(fases) !== "number"
            || typeof(fasesConcluidas) !== "number"
            || typeof(zerado) !== "boolean")
            {
                throw new Error("Tipo errado boy")
            }
            this.nomeDoJogo = nomeDoJogo
            this.tipo = tipo
            this.qtdJogadores = qtdJogadores
            this.dificuldade = dificuldade
            this.fases = fases
            this.fasesConcluidas = fasesConcluidas ?? 0
            this.zerado = zerado ?? false
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

const meuJogo = new Jogo(
    "Escola", "Terror", 45, 5, 3, 2, false
)

console.log(meuJogo.jogar())
export default Jogo
