import { AppTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = {
  isConnected: null,
}


// LIST EVENT
const changeNetworkStatus = (state, {status}) => ({
  ...state,
  isConnected: status,
});

export default makeReducerCreator(initialState, {
  [AppTypes.CHANGE_NETWORK_STATUS]: changeNetworkStatus
});

