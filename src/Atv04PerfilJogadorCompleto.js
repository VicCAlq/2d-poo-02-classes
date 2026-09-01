import { useState} from 'react' ;

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
        Clique aqui abaixo pra carregar uma atividade
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