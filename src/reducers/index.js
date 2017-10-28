import { combineReducers } from 'redux';

import locations from './locations';
import intl from './intl';

const rootReducer = combineReducers({
  locations,
  intl
});

export default rootReducer;
