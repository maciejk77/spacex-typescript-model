import { combineReducers } from 'redux';
import rocketsReducer from './rocketsReducer';

const reducers = combineReducers({
  rockets: rocketsReducer,
});

export default reducers;
