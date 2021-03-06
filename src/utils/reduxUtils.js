/* eslint-disable no-console */
import { call, put, fork, select } from 'redux-saga/effects';
// import I18n from 'i18next';
import _ from 'lodash';

// ERROR CODE
const ERROR_CODE = [401];

export function makeConstantCreator(...params) {
  const constant = {};
  _.each(params, param => {
    constant[param] = param;
  });
  return constant;
}

export const makeActionCreator = (type, params = null) => ({ type, ...params });

export const makeReducerCreator = (initialState = null, handlers = {}) => (
  state = initialState,
  action,
) => {
  if (!action && !action.type) return state;
  const handler = handlers[action.type];
  return (handler && handler(state, action)) || state;
};

export function* apiWrapper(
  config = { isShowProgress: true, isShowSucceedNoti: false },
  apiFunc,
  ...params
) {
  try {
    const response = yield call(apiFunc, ...params);
    // yield fork(checkError, response);
    // notification.destroy();
    // config.isShowSucceedNoti &&
    //   notification.success({
    //     message: "Success",
    //     description: config.successDescription || "Thành công hehe",
    //   });
    return response;
  } catch (err) {
    // notification.destroy();
    console.log(err);
    
    // notification.error({
    //   message: "Error",
    //   description: config.errorDescription || "Lỗi cmnr"|| err.message,
    // });
    // yield fork(checkError, err);
    throw new Error(err);
  }
}

// export function* checkError(res) {
//   const staff = yield select(state => state.staff);
//   if (res.code === 401 && staff.isAuthenticated) {
//     console.log('System failed ~~');
//   }
//   if (ERROR_CODE.indexOf(res.code) > -1) {
//     yield put(push(`/error/${res.code}`));
//   }
// }
