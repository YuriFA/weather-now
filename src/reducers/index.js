import { combineReducers } from 'redux';

import locations from './locations';
import locales from './locales';
import intl from './intl';

const rootReducer = combineReducers({
  locations,
  locales,
  intl
});

export default rootReducer;
