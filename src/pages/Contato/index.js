import { Link } from 'react-router-dom';

function Contato() {
  return (
    <div>
      <h1>Bem vindo a página Contato</h1>
      <br />
      <Link to={'/'}>Voltar para Home</Link>
    </div>
  );
}

export default Contato;
