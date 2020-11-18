const questionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUESTION':
      return action.payload;
    default:
      return state;
  }
};

export default questionReducer;
