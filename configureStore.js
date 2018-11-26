import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import * as ListFeature from './features/List';

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
    list: ListFeature.reducer,
  });
}

export { createReducer };
export default configureStore;
