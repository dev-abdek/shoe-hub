import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const NOTES_URL = "http://localhost:3001/newNotes";

const notesAdapter = createEntityAdapter();

const initialState = notesAdapter.getInitialState({
  status: "idle",
  error: null,
});

export const fetchNewNotes = createAsyncThunk(
  "newNotes/fetchNewNotes",
  async () => {
    const response = await axios.get(NOTES_URL);
    return response.data;
  }
);
export const addNewNotes = createAsyncThunk(
  "addNotes/addNewNotes",
  async (initialNotes) => {
    const response = await axios.post(NOTES_URL, initialNotes);
    return response.data;
  }
);
export const updateNewNotes = createAsyncThunk(
  "updateNotes/updateNewNotes",
  async (initialNotes) => {
    const { id } = initialNotes;
    const response = await axios.put(`${NOTES_URL}/${id}`, initialNotes);
    return response.data;
  }
);
export const deleteNewNotes = createAsyncThunk(
  "deleteNotes/deleteNewNotes",
  async (initialNotes) => {
    const { id } = initialNotes;
    const response = await axios.delete(`${NOTES_URL}/${id}`);
    if (response?.status === 200) return initialNotes;
    return `${response?.status}: ${response?.statusText}`;
  }
);

const notesSlice = createSlice({
  name: "newNotes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNewNotes.fulfilled, (state, action) => {
        notesAdapter.upsertMany(state, action.payload);
      })
      .addCase(addNewNotes.fulfilled, (state, action) => {
        notesAdapter.addOne(state, action.payload);
      })
      .addCase(updateNewNotes.fulfilled, (state, action) => {
        notesAdapter.upsertOne(state, action.payload);
      })
      .addCase(deleteNewNotes.fulfilled, (state, action) => {
        const { id } = action.payload;
        notesAdapter.removeOne(state, id);
      });
  },
});
export const {
  selectAll: selectAllNewNotes,
  selectById: selectNewNotesById,
  selectIds: selectNewNotesByIds,
} = notesAdapter.getSelectors((state) => state.newNotes);

export default notesSlice.reducer;
