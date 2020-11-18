const markOptionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECTED_OPTION':
      return action.payload;
    default:
      return state;
  }
};

export default markOptionReducer;
