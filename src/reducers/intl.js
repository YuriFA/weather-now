const initialState = {
  locale: 'en',
  messages: {}
};

const intl = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOCALE':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default intl;
