const swipeDirection = {
  LEFT: 'left',
  RIGHT: 'right',
};

/**
 * Возвращает направление swipe для компонента react-native-swipe
 * @param {number} index - индекс нового слайда
 * @param {number} curIndex - индекс предыдущего слайда
 * Примечание: для трех слайдов
 */
function getSwipeDirection(index, curIndex) {
  if ((curIndex === 0 && index === 1)
    || (curIndex === 1 && index === 2)
    || (curIndex === 2 && index === 0)
  ) {
    return swipeDirection.LEFT;
  }
  return swipeDirection.RIGHT;
}

export default swipeDirection;
export {
  getSwipeDirection,
};