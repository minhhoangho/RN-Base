import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
// eslint-disable-next-line import/no-cycle
import rootSaga from './sagas';
import {REDUX_PERSIST} from 'src/configs/AppSetting'

/* ------------- Redux Configuration ------------- */
const middlewares = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);


if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}


const persistedReducer = persistReducer(REDUX_PERSIST, rootReducer);

export default () => {
  enhancers.push(applyMiddleware(...middlewares));
  let store = createStore(persistedReducer, compose(...enhancers));
  const persistConfig = { enhancers };

  const persistor = persistStore(store, persistConfig, () => {
    // console.log('Test sfsfsfs', store.getState());
  });
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
