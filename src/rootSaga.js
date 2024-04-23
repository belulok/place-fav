import { all } from 'redux-saga/effects';
import { placesSaga } from './features/places/placesSaga';

export default function* rootSaga() {
  yield all([
    placesSaga(),
  ]);
}