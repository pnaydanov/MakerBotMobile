const actionTypes = {
  SET_CUR_DATE: 'my-awesome-app/shedule/SET_CUR_DATE',
};

/**
 * Устанавливает текущую дату
 * @param {number} date - текущая дата
 */
function setCurDate(date) {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CUR_DATE, payload: date });
  };
}

export {
  actionTypes,
  setCurDate,
};