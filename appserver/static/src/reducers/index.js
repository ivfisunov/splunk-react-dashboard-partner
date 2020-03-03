import { combineReducers } from 'redux';
import * as actionsTypes from '../actions/types';

const reducer = (state = {text: 'default'}, action) => {
  switch (action.type) {
    case actionsTypes.INIT_APP:
      return state;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  data: reducer,
});

export default rootReducer;