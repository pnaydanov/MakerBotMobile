const actionTypes = {
  ADD_LIST: 'features/board/ADD_LIST',
};

function addList(list) {
  return async (dispatch, getState, extra) => {
    dispatch({ type: actionTypes.ADD_LIST, payload: list });
  };
}

export {
  actionTypes,
  addList,
};