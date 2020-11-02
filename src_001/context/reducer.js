const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {...state, name: action.payload.newName};

    case 'UPDATE_SURNAME':
      return {...state, surname: action.payload.newSurname};

    case 'UPDATE_EMAIL':
      return {...state, email: action.payload.newEmail};

    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload.newPassword};

    case 'LOGGED_IN':
      return {...state, isLogin: true};

    default:
      return {...state};
  }
};

export {reducer};
