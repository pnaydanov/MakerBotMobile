import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CUR_DATE:
      return {
        ...state,
        curDate: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;