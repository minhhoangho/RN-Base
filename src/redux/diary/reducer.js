import { DiaryTypes} from './actions';
import {makeReducerCreator} from '../../utils/reduxUtils';

export const initialState = {
  listNote: [],
  currentNote: {
    title: null,
    content: null,
    date: null,
    time: null,
    color: null,
  },
};

// LIST EVENT
const setNote = (state, {title=null, content=null, date=new Date(), time=new Date(), color=state.currentNote.color}) => {
  let current = {...state.currentNote};
  current = {...current, date, time, color};

  if(title) {
    current.title = title || null;
    return {
      ...state,
      currentNote: current,
    };
  }
  if(content) {
    current.content = content || null;
    return {
      ...state,
      currentNote: current,
    };
  }
  return {
    ...state,
    currentNote: current,
  };
};

const clearCurrentNote = (state)=> {
  console.log("clearCurrentNote -> clearCurrentNote")
  return {
    ...state,
    currentNote: {...initialState.currentNote}
  }
}
const getListNoteSucess = (state, {data})=> {
  return {
    ...state,
    listNote: data
  }
}

export default makeReducerCreator(initialState, {
  [DiaryTypes.SET_NOTE]: setNote,
  [DiaryTypes.CLEAR_NOTE]: clearCurrentNote,
  [DiaryTypes.GET_LIST_NOTES_SUCCESS]: getListNoteSucess,
});
