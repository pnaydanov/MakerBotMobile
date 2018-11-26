const actionTypes = {
  GET_REPOS: 'my-awesome-app/repos/LOAD',
  GET_REPOS_SUCCESS: 'my-awesome-app/repos/LOAD_SUCCESS',
  GET_REPOS_FAIL: 'my-awesome-app/repos/LOAD_FAIL',
}

function getRepos() {
  return async (dispatch, getState, extra) => {
    const { api } = extra;
    const repos = await api.getRepos();
    dispatch({ type: actionTypes.GET_REPOS, payload: repos})
  }
}

export {
  actionTypes,
  getRepos,
}