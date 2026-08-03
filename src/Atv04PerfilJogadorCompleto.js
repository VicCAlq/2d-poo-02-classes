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
import { useState } from 'react';

export default function Atv04TratarErrosDeMuitos() {
  const [comentarios, setComentarios] = useState([]);

  const carregarAtividade = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((resposta) => {
        
        if (!resposta.ok) {
          throw new Error('Erro ao buscar os comentários: ' + resposta.status);
        }
        return resposta.json();
      })
      .then((dados) => {
        
        setComentarios(dados);
      })
      .catch((erro) => {
        
        console.error('Ocorreu um erro:', erro);
      });
  };

  return (
    <div>
      <button onClick={carregarAtividade}>
        Clique abaixo para carregar uma atividade
      </button>

      <div>
        {comentarios.map((item) => (
          <div key={item.id}>
            <p>
              {item.postId}: {item.id} - {item.email}
            </p>
            <p>{item.name}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}