import { Link } from 'react-router-dom';

function Sobre() {
  return (
    <div>
      <h1>Bem vindo a página Sobre</h1>
      <br />
      <Link to={'/'}>Voltar para Home</Link>
    </div>
  );
}

export default Sobre;
