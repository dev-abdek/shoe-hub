import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  newList: [],
  status: "idle",
  error: null,
};

const newListSlice = createSlice({
  name: "newList",
  initialState,
  reducers: {
    createList: {
      reducer(state, action) {
        state.newList.push(action.payload);
      },
      prepare(content) {
        return {
          payload: {
            id: nanoid(),
            content,
          },
        };
      },
    },
    updateList(state, action) {
      const { id, content } = action.payload;
      const existingList = state.newList.find((n) => n.id === id);
      if (existingList) {
        existingList.content = content;
      }
    },
  },
});

export const selectAllNewList = (state) => state.newList.newList;

export const selectListById = (state, listId) =>
  state.newList.newList.find((list) => list.id === listId);

export const { createList, updateList } = newListSlice.actions;

export default newListSlice.reducer;
