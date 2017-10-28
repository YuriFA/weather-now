import {
  ADD_LOCATION, REMOVE_LOCATION,
  FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE, CHANGE_UNITS
} from './../actions';

const initialState = {
  temperature: 0,
  isFetching: false,
  isFetchingError: false,
  selectedUnits: 'celsius' // [celsius, fahrenheit]
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOCATION:
      return {
        ...state,
        id: action.id,
        name: action.name,
      };
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ...action,
        temperature: action[state.selectedUnits]
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetchingError: true
      };
    case CHANGE_UNITS:
      return {
        ...state,
        selectedUnits: action.units,
        temperature: state[action.units]
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
      const nextState = { ...state };
      delete nextState[action.id];
      return nextState;
    case FETCH_WEATHER_REQUEST:
    case FETCH_WEATHER_SUCCESS:
    case FETCH_WEATHER_FAILURE:
    case CHANGE_UNITS:
      return {
        ...state,
        [action.id]: location({ ...state[action.id] }, action)
      };
    default:
      return state;
  }
};

export default locations;
