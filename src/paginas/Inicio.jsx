import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  obtenerClientesAction,
  borrarClienteAction,
} from '../actions/clienteActions';
import Cliente from '../components/Cliente';

const Inicio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar API
    const cargarClientes = () => dispatch(obtenerClientesAction());
    cargarClientes();
  }, []);

  // Obtener el State
  const clientes = useSelector(state => state.clientes.clientes);

  const handleEliminar = id => {
    const confirmar = confirm('¿Desea eliminar este cliente?');

    if (confirmar) {
      dispatch(borrarClienteAction(id));
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map(cliente => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
