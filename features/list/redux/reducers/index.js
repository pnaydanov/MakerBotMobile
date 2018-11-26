import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return {
        ...state,
        loading: true,
        repos: action.payload
      };
    default:
      return state;
  }
}

export default reducer;