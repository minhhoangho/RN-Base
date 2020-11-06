import {all} from 'redux-saga/effects';
import diarySaga from './diary/sagas';
export default function* sagas() {
  yield all([...diarySaga]);
}
