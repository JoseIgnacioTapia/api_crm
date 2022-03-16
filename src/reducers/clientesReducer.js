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

const initialState = {
  clientes: [],
  cliente: {},
  error: null,
  loading: false,
  clienteEditar: {},
  clienteEliminar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_CLIENTES:
    case AGREGANDO_CLIENTE:
    case OBTENER_CLIENTE_MOSTRAR:
    case CARGAR_CLIENTE_EDITAR:
    case COMENZAR_EDICION_CLIENTE:
      return {
        ...state,
        loading: action.payload,
      };
    case CLIENTE_AGREGADO_EXITO:
      return {
        ...state,
        loading: false,
        clientes: [...state.clientes, action.payload],
      };
    case CLIENTE_MOSTRAR_EXITO:
      return {
        ...state,
        loading: false,
        cliente: action.payload,
      };
    case AGREGAR_CLIENTE_ERROR:
    case DESCARGA_CLIENTES_ERROR:
    case CLIENTE_ELIMINADO_ERROR:
    case CLIENTE_MOSTRAR_ERROR:
    case CLIENTE_EDITADO_ERROR:
    case OBTENER_CLIENTE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DESCARGA_CLIENTES_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        clientes: action.payload,
      };
    case OBTENER_CLIENTE_ELIMINAR:
      return {
        ...state,
        clienteEliminar: action.payload,
      };
    case CLIENTE_ELIMINADO_EXITO:
      return {
        ...state,
        clientes: state.clientes.filter(
          cliente => cliente.id !== state.clienteEliminar
        ),
        clienteEliminar: null,
      };
    case OBTENER_CLIENTE_EDITAR:
      return {
        ...state,
        loading: false,
        clienteEditar: action.payload,
      };
    case CLIENTE_EDITADO_EXITO:
      return {
        ...state,
        clienteEditar: null,
        clientes: state.clientes.map(cliente =>
          cliente.id === action.payload.id
            ? (cliente = action.payload)
            : cliente
        ),
      };

    default:
      return state;
  }
}
