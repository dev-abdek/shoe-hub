import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const BOOKS_URL = "http://localhost:3001/books";

const bookAdapter = createEntityAdapter();

const initialState = bookAdapter.getInitialState({
  status: "idle",
  error: null,
});

console.log(initialState);

export const fetchBook = createAsyncThunk("book/fetchBook", async () => {
  const req = await axios.get(BOOKS_URL);
  return req.data;
});

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      bookAdapter.upsertMany(state, action.payload);
    });
  },
});

export const {
  selectAll: selectAllBooks,
  selectById: selectBookById,
  selectIds: selectBooksIds,
} = bookAdapter.getSelectors((state) => state.books);

export default bookSlice.reducer;
