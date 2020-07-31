import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ApiReducer from './ApiReducer';

const rootReducer = combineReducers({
  pokeApi: ApiReducer,
});

const configureStore = createStore(rootReducer,{}, applyMiddleware(ReduxThunk))

export default configureStore;