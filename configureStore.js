import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import { Platform } from 'react-native';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

import * as listFeature from 'features/list';

function configureStore(extra) {
  const middlewares = [
    thunk.withExtraArgument(extra),
  ];

  const reducer = createReducer();
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      devTools({
        name: Platform.OS,
        hostname: '192.168.10.207',
        port: 5678,
      }),
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
