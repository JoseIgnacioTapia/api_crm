import {
  AGREGANDO_CLIENTE,
  CLIENTE_AGREGADO_EXITO,
  AGREGAR_CLIENTE_ERROR,
  COMENZAR_DESCARGA_CLIENTES,
  DESCARGA_CLIENTES_EXITO,
  DESCARGA_CLIENTES_ERROR,
  OBTENER_CLIENTE_MOSTRAR,
  CLIENTE_MOSTRAR_EXITO,
  CLIENTE_MOSTRAR_ERROR,
  OBTENER_CLIENTE_ELIMINAR,
  CLIENTE_ELIMINADO_EXITO,
  CLIENTE_ELIMINADO_ERROR,
  CARGAR_CLIENTE_EDITAR,
  OBTENER_CLIENTE_EDITAR,
  OBTENER_CLIENTE_ERROR,
  COMENZAR_EDICION_CLIENTE,
  CLIENTE_EDITADO_EXITO,
  CLIENTE_EDITADO_ERROR,
} from '../types';

// Crear nuevos clientes
export function crearNuevoClienteAction(cliente) {
  return async dispatch => {
    dispatch(comenzarAgregarCliente());

    try {
      const url = import.meta.env.VITE_API_URL;

      const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resultado = await respuesta.json();

      dispatch(agregarClienteExito(cliente));
    } catch (error) {
      console.log(error);

      dispatch(agregarClienteError(true));
    }
  };
}

const comenzarAgregarCliente = () => ({
  type: AGREGANDO_CLIENTE,
  payload: true,
});

const agregarClienteExito = cliente => ({
  type: CLIENTE_AGREGADO_EXITO,
  payload: cliente,
});

const agregarClienteError = estado => ({
  type: AGREGAR_CLIENTE_ERROR,
  payload: estado,
});

// Descarga los clientes de la base de datos
export function obtenerClientesAction() {
  return async dispatch => {
    dispatch(comenzarDescargaClientes());

    try {
      const url = import.meta.env.VITE_API_URL;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      dispatch(descargaClientesExito(resultado));
    } catch (error) {
      console.log(error);
      dispatch(descargaClientesError());
    }
  };
}

const comenzarDescargaClientes = () => ({
  type: COMENZAR_DESCARGA_CLIENTES,
  payload: true,
});

const descargaClientesExito = clientes => ({
  type: DESCARGA_CLIENTES_EXITO,
  payload: clientes,
});

const descargaClientesError = () => ({
  type: DESCARGA_CLIENTES_ERROR,
  payload: false,
});

// Obtener un cliente
export function obtenerClienteAction(id) {
  return async dispatch => {
    dispatch(obtenerClienteMostrar());

    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      dispatch(obtenerClienteExito(resultado));
    } catch (error) {
      console.log(error);
      dispatch(clienteMostrarError());
    }
  };
}

const obtenerClienteMostrar = () => ({
  type: OBTENER_CLIENTE_MOSTRAR,
  payload: true,
});

const obtenerClienteExito = cliente => ({
  type: CLIENTE_MOSTRAR_EXITO,
  payload: cliente,
});

const clienteMostrarError = () => ({
  type: CLIENTE_MOSTRAR_ERROR,
  payload: true,
});

// Selecciona y elimina el cliente
export function borrarClienteAction(id) {
  return async dispatch => {
    dispatch(obtenerClienteEliminar(id));

    try {
      const url = `${import.meta.env.VITE_API_URL}/${id}`;
      const respuesta = await fetch(url, {
        method: 'DELETE',
      });

      await respuesta.json();

      dispatch(eliminarClienteExito());
    } catch (error) {
      console.log(error);
      dispatch(eliminarClienteError());
    }
  };
}

const obtenerClienteEliminar = id => ({
  type: OBTENER_CLIENTE_ELIMINAR,
  payload: id,
});

const eliminarClienteExito = () => ({
  type: CLIENTE_ELIMINADO_EXITO,
});

const eliminarClienteError = () => ({
  type: CLIENTE_ELIMINADO_ERROR,
  payload: true,
});

// Colocar cliente en edición
export function obtenerClienteEditar(id) {
  return async dispatch => {
    dispatch(cargarClienteEditar());

    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      dispatch(obtenerClienteEditarAction(resultado));
    } catch (error) {
      console.log(error);
      dispatch(clienteEditarError());
    }
  };
}

const cargarClienteEditar = () => ({
  type: CARGAR_CLIENTE_EDITAR,
  payload: true,
});

const obtenerClienteEditarAction = cliente => ({
  type: OBTENER_CLIENTE_EDITAR,
  payload: cliente,
});

const clienteEditarError = () => ({
  type: OBTENER_CLIENTE_ERROR,
  payload: true,
});

// Edita un registro en la API y en el state
export function editarClienteAction(id, cliente) {
  return async dispatch => {
    dispatch(editarCliente());

    try {
      const url = `${import.meta.env.VITE_API_URL}/${id}`;
      const respuesta = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(cliente),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch(editarClienteExito(cliente));
    } catch (error) {
      console.log(error);
      dispatch(editarClienteError());
    }
  };
}

const editarCliente = () => ({
  type: COMENZAR_EDICION_CLIENTE,
  payload: true,
});

const editarClienteExito = cliente => ({
  type: CLIENTE_EDITADO_EXITO,
  payload: cliente,
});

const editarClienteError = () => ({
  type: CLIENTE_EDITADO_ERROR,
  payload: true,
});
