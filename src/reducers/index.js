import {
  ADD_LOCATION, REMOVE_LOCATION,
  REQUEST_WEATHER, RECEIVE_WEATHER
} from './../actions';

const initialState = {
  temperature: 0,
  isFetching: false
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        name: action.name,
      };
    case REQUEST_WEATHER:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_WEATHER:
      return {
        ...state,
        isFetching: false,
        ...action
      };
    default:
      return state;
  }
};

const locations = (state = {}, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        [action.id]: location(undefined, action)
      };
    case REMOVE_LOCATION:
      const copyState = Object.assign({}, state);
      delete copyState[action.id];
      return copyState;
    case REQUEST_WEATHER:
    case RECEIVE_WEATHER:
      return {
        ...state,
        [action.id]: location({ ...state[action.id] }, action)
      };
    default:
      return state;
  }
};

export default locations;
