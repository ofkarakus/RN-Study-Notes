function reducer (state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      state.counter = state.counter + 1;
      return {...state};

    case 'DECREASE_COUNTER':
      return {...state, counter: state.counter -1};

    case 'UPDATE_USERNAME':
      return {...state, username: action.payload.newUserName}
    default:
      return state;
  }
};

export {reducer};
