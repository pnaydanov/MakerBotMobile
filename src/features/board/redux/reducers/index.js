import initialState from '../initial';
import { actionTypes } from '../actions';

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_LIST:
      const newLists = [
        ...state.board.lists,
        action.payload,
      ];
      return {
        ...state,
        lists: newLists,
      };
    default:
      return state;
  }
}

export default reducer;