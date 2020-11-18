const voiceReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_VOICES':
      return action.payload;
    default:
      return state;
  }
};

export default voiceReducer;
