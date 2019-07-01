import { combineReducers,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import User from './user.reducers';

const rootReducer = combineReducers({
    User,
});

export default createStore(rootReducer,applyMiddleware(thunk));