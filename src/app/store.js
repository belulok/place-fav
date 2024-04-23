import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import placesReducer from '../features/places/placesSlice';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
