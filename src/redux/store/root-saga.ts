import { all, fork } from 'redux-saga/effects';
import { formWatcherSaga } from '../modules/test-module';

export default function* rootSaga() {
  yield all([fork(formWatcherSaga)]);
}
