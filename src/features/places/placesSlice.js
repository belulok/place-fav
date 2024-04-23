import { createSlice, createAction } from '@reduxjs/toolkit';

export const markFavorite = createAction('places/markFavorite');
export const markFavoriteSuccess = createAction('places/markFavoriteSuccess');
export const markFavoriteFailure = createAction('places/markFavoriteFailure');

export const placesSlice = createSlice({
  name: 'places',
  initialState: {
    items: [],
    favorite: {},
    error: null,
  },
  reducers: {
    addPlace: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(markFavoriteSuccess, (state, action) => {

        state.favorite = action.payload;
      })
      .addCase(markFavoriteFailure, (state, action) => {

        state.error = action.payload;
      });
  },
});

export const { addPlace } = placesSlice.actions;

export default placesSlice.reducer;
