import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerClienteEditar } from '../actions/clienteActions';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const obtenerClienteAPI = () => dispatch(obtenerClienteEditar(id));
    obtenerClienteAPI();
  }, []);

  // Obtenemos el state
  const cliente = useSelector(state => state.clientes.clienteEditar);
  const cargando = useSelector(state => state.clientes.loading);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar datos de un cliente
      </p>

      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p>Cliente ID no válido</p>
      )}
    </>
  );
};

export default EditarCliente;
