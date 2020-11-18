// import axios from 'axios';

// export default axios.create({
//   baseURL: 'https://api.unsplash.com',
//   headers: {
//     Authorization: 'Client-ID 3ARi6xnV3xaV8VYjf3_eUVaPtImjudkjcBs38lUtLmk',
//   },
// });

export const getQuestion = question => dispatch => {
  dispatch({
    type: 'GET_QUESTION',
    payload: question,
  });
};

export const selectedOption = ({ option, index } = {}) => (
  dispatch,
  getState
) => {
  if (!option && !index) {
    dispatch({ type: 'SELECTED_OPTION', payload: {} });
    return;
  }

  if (option === getState().question.ans) {
    dispatch({
      type: 'SELECTED_OPTION',
      payload: { index, right: true },
    });

    return;
  }

  dispatch({
    type: 'SELECTED_OPTION',
    payload: { index, right: false },
  });
};

export const setVoices = voices => {
  return {
    type: 'SET_VOICES',
    payload: voices,
  };
};
