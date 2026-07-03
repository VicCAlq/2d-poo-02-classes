/* Este arquivo contém um exemplo de classe, com 
  * explicações de cada parte nos comentários */

// Criamos uma classe utilizando a palavra chave "class"
// seguida do nome da classe, sempre iniciada com letra
// maiúscula.
class Filme {
  // O primeiro item da classe é uma função chamada "constructor".
  // ela recebe como argumentos todas as propriedades que você
  // deseja configurar no objeto que vai ser criado com ela.
  // Esta é a função chamada quando usamos "new NomeDaClasse"
  constructor(
    titulo, tipo, duracao, assistido
  ) {
    // Dentro do construtor podemos verificar se os argumentos
    // foram usados corretamente.
    if (
      typeof(titulo) !== "string"
      || typeof(tipo) !== "string"
      || typeof(duracao) !== "number"
    ) {
      console.log(`Os dados informados não estão no formato correto:
      titulo: texto, tipo: texto, duracao: número, assitido: booleano ou vazio`)
      return
    }
    // Atribuímos os valores dos argumentos para propriedades
    // da função com a sintaxe abaixo. "this" representa o novo
    // objeto criado pela classe
    this.titulo = titulo
    this.tipo = tipo
    this.duracao = duracao
    // A sintaxe abaixo vai usar o valor do argumento "assistido"
    // caso ele não seja undefined. Se for undefined, define como "false"
    this.assistido = assistido || false
    // A sintaxe abaixo representa um "if-else" simplificado:
    // Se assistido for "true", quantoFalta vai ser 0, senão
    // vai ser o valor da variável interna "duracao"
    this.quantoFalta = assistido === true ? 0 : this.duracao
    // Propriedade inicializada com valor padrão
    this.nota = 5
  }

  // Métodos das classes (que vão ser inclusos nos objetos criados
  // por ela) são criados da forma abaixo.
  assistir(duracao) {
    // "this" aqui representa o objeto criado pela classe
    this.quantoFalta -= duracao
    if (this.quantoFalta === 0) {
      this.assistido = true
    }
  }

  avaliar(nota) {
    this.nota = nota
  }
}

// Esta sintaxe vai criar um objeto do tipo "Filme"
// e armazenar na variável "primeiroFilme"
const primeiroFilme = new Filme(
  "Lilo & Stitch", "comédia", 120, true
)

// E o objeto criado terá as propriedades abaixo:
/*
{
  titulo: "Lilo & Stitch",
  tipo: "comédia",
  duracao: 120,
  assistido: true,
  quantoFalta: 0,
  nota: 5,
  assistir: function(duracao) {
    // "this" aqui representa o objeto criado pela classe
    this.quantoFalta -= duracao
    if (this.quantoFalta === 0) {
      this.assistido = true
    }
  },
  avaliar: function(nota) {
    this.nota = nota
  },
}
*/
