import { useState, useEffect } from 'react';

const Inicio = () => {
  const [clientes, setclientes] = useState([]);

  useEffect(() => {
    const obtenerClientesAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setclientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerClientesAPI();
  }, []);

  return <div>Inicio.jsx</div>;
};

export default Inicio;
