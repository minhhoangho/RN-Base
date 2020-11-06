import {put, select, takeLatest} from 'redux-saga/effects';
import {saveNote, retrieveNote} from '../../services/firebase/Firebase';
import {DiaryTypes, getListNoteSuccessAction} from './actions';

function* saveNoteToFirebase() {
  const {currentNote} = yield select((state) => {
    return state.diary;
  });
  console.log('function*saveNoteToFirebase -> currentNote', currentNote);

  yield saveNote(currentNote);
}

function* retrieveNotesFromFirebase() {
  try {
    const result = yield retrieveNote();
    yield put(getListNoteSuccessAction(result));
  } catch (error) {
    console.log('*retrieveNotesFromFirebase -> error', error);
  }
}

export default [
  takeLatest(DiaryTypes.SAVE_NOTE, saveNoteToFirebase),
  takeLatest(DiaryTypes.GET_LIST_NOTES, retrieveNotesFromFirebase),
];
