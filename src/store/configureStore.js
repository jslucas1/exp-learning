import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import teammatesReducer from '../reducers/teammates';
import skillUsersReducer from '../reducers/skillusers';
import skillsReducer from '../reducers/skills';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      users: usersReducer,
      teammates: teammatesReducer,
      skillUsers: skillUsersReducer,
      skills: skillsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
