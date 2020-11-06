import {makeActionCreator, makeConstantCreator} from '../../utils/reduxUtils';
export const DiaryTypes = makeConstantCreator(
  'GET_LIST_NOTES',
  'GET_LIST_NOTES_SUCCESS',
  'SAVE_NOTE',
  'SET_NOTE',
  'CLEAR_NOTE',
);


export const getListNoteAction = () => makeActionCreator(DiaryTypes.GET_LIST_NOTES);

export const getListNoteSuccessAction = (data) => makeActionCreator(DiaryTypes.GET_LIST_NOTES_SUCCESS, {data});

export const setNoteAction = ({title, content, date, time, color}) =>
  makeActionCreator(DiaryTypes.SET_NOTE, {
    title,
    content,
    date,
    time,
    color,
  });

export const clearNoteAction = () => makeActionCreator(DiaryTypes.CLEAR_NOTE);

export const saveNoteAction = () => makeActionCreator(DiaryTypes.SAVE_NOTE);
