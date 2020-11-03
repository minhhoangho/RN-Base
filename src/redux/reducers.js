import { combineReducers } from 'redux';
import global from './global/reducer'


const appReducers = combineReducers({
  global
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_REDUX') {
    // eslint-disable-next-line no-console
    console.log('RESET_REDUX Called');
    Global.token = '';
    // state = undefined;

    // state = _.pick(state, ['config', 'main.news']);
  }
  return appReducers(state, action);
};

export default rootReducer;