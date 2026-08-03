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
 import { useState } from 'react';

export default function Atv02MuitosItens() {
  const [lista, setLista] = useState([]);

  const carregarAtividades = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resposta) => resposta.json())
      .then((dados) => setLista(dados))
      .catch((erro) => console.error('Erro ao carregar as atividades:', erro));
  };

  return (
    <div>
      <button onClick={carregarAtividades}>
        Clique abaixo para carregar várias atividades
      </button>

      <div>
        {lista.map((item) => (
          <p key={item.id}>
            {item.id} - {item.title}: {item.completed ? 'feito' : 'a fazer'}
          </p>
        ))}
      </div>
    </div>
  );
}