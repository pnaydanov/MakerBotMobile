import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import * as listFeature from './features/list';

function configureStore(extra) {
  const middlewares = [
    thunk.withExtraArgument(extra),
  ];

  const reducer = createReducer();
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
    ),
  );

  return store;
}

function createReducer() {
  return combineReducers({
    list: listFeature.reducer,
  });
}

export { createReducer };
export default configureStore;
