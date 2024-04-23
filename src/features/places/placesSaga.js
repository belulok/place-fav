import { call, put, takeLatest } from 'redux-saga/effects';
import { markFavorite, markFavoriteSuccess, markFavoriteFailure } from './placesSlice';
import { markFavoriteApi } from '../../api/placesAPI';

function* handleMarkFavorite(action) {
  try {
    const response = yield call(markFavoriteApi, action.payload);
    yield put(markFavoriteSuccess(response));
  } catch (error) {
    yield put(markFavoriteFailure(error.toString()));
  }
}

export function* watchMarkFavorite() {
  yield takeLatest(markFavorite.type, handleMarkFavorite);
}

export function* placesSaga() {
  yield takeLatest(markFavorite.type, handleMarkFavorite);
}
