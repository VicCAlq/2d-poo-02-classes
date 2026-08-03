/*
 * [ATV 01 - Jogo]
 *
 * Crie e exporte por padrão uma classe chamada "Jogo" que ao ser 
 * usada para criar um objeto, criará com as propriedades abaixo:
 * 
 * nomeDoJogo: texto,
 * tipo: texto,
 * qtdJogadores: numero inteiro,
 * dificuldade: numero de 1 a 5,
 * fases: numero inteiro,
 * fasesConcluidas: numero inteiro iniciado em zero,
 * zerado: booleano iniciado em false
 *
 * Lembre-se de exportar a classe "Jogo" no final do arquivo usando
 * "export default Jogo"
 */
import { useState } from 'react';

export default function Atv01UmItem() {
  const [item, setItem] = useState(null);

  const carregarAtividade = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((resposta) => resposta.json())
      .then((dados) => setItem(dados))
      .catch((erro) => console.error('Erro ao carregar a atividade:', erro));
  };

  return (
    <div>
      <button onClick={carregarAtividade}>
        Clique abaixo para carregar uma atividade
      </button>

      {item && (
        <p>
          {item.id} - {item.title}: {item.completed ? 'feito' : 'a fazer'}
        </p>
      )}
    </div>
  );
}