import { configureStore } from "@reduxjs/toolkit";
import newListReducer from "../features/newList/newListSlice";
import newNotesReducer from "../features/notes/notesSlice";
import { apiSlice } from "../features/api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import moviesReducer from "../features/movies/moviesSlice";
import booksReducer from "../features/book/bookSlice";

export const store = configureStore({
  reducer: {
    newList: newListReducer,
    newNotes: newNotesReducer,
    movies: moviesReducer,
    books: booksReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
