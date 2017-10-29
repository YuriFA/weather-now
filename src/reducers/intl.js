import { SET_LOCALE } from './../actions';
import { DEFAULT_LOCALE } from '../locales';

const initialState = {
  locale: DEFAULT_LOCALE,
  messages: {}
};

const intl = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
        messages: action.messages
      };
    default:
      return state;
  }
};

export default intl;
