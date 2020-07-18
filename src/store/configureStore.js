import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import teammatesReducer from '../reducers/teammates';
import skillUsersReducer from '../reducers/skillusers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      users: usersReducer,
      teammates: teammatesReducer,
      skillUsers: skillUsersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
