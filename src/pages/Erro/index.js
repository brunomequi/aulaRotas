import { Link } from 'react-router-dom';

function Erro() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <br />
      <Link to={'/'}>Voltar para Home</Link>
    </div>
  );
}

export default Erro;
