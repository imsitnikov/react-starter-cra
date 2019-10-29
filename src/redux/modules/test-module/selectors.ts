import { createSelector } from 'reselect';
import { FullStoreType } from './types';

const errorTextSelector = (store: FullStoreType) =>
  store.testFormStorage.errorTextValue;

export const getTestFormError = createSelector(
  [errorTextSelector],
  error => error,
);
