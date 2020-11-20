const streakReducer = (state = 0, action) => {
  if (action.type === 'COUNT_STREAK') {
    return action.payload;
  }

  return state;
};

export default streakReducer;
