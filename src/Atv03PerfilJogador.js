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
import { useState } from 'react';

export default function Atv03TratarErrosDeUm() {
  const [comentario, setComentario] = useState(null);

  const carregarAtividade = () => {
    fetch('https://jsonplaceholder.typicode.com/comments/20')
      .then((resposta) => {
        
        if (!resposta.ok) {
          throw new Error('Erro na requisição: ' + resposta.status);
        }
        return resposta.json();
      })
      .then((dados) => {
        
        setComentario(dados);
      })
      .catch((erro) => {
        
        console.error('Ocorreu um erro ao buscar os dados:', erro);
      });
  };

  return (
    <div>
      <button onClick={carregarAtividade}>
        Clique abaixo para carregar uma atividade
      </button>

      {comentario && (
        <div>
          <p>
            {comentario.postId}: {comentario.id} - {comentario.email}
          </p>
          <p>{comentario.name}</p>
          <p>{comentario.body}</p>
        </div>
      )}
    </div>
  );
}