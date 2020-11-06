import {makeActionCreator, makeConstantCreator} from '../../utils/reduxUtils';
export const AppTypes = makeConstantCreator('STARTUP', 'CHANGE_NETWORK_STATUS');

export const startup = () => makeActionCreator(AppTypes.STARTUP);
export const changeNetworkStatus = (status) =>
  makeActionCreator(AppTypes.CHANGE_NETWORK_STATUS, {status});
