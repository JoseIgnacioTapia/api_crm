import { useParams } from 'react-router-dom';

const VerClientes = () => {
  const { id } = useParams();
  console.log(id);

  return <div>VerClientes.jsx</div>;
};

export default VerClientes;
