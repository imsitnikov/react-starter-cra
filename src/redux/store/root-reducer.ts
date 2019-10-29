import { combineReducers } from 'redux';
import testFormReducer from '../modules/test-module';

export const rootReducer = combineReducers({
  testFormStorage: testFormReducer,
});
