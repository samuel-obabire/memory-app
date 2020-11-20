import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
import selectedOptionReducer from './selectedOptionReducer';
import voiceReducer from './voiceReducer';
import streakReducer from './streakReducer';

export default combineReducers({
  question: questionReducer,
  selectedOption: selectedOptionReducer,
  voices: voiceReducer,
  streak: streakReducer,
});
