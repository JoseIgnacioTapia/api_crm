import { combineReducers } from 'redux';
import clientesReducer from './clientesReducer';

export default combineReducers({
  clientes: clientesReducer,
});
