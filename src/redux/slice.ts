import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
interface IHasId {
  id: string;
}

interface ITodoEditable extends IHasId {
  title: string;
  content: string;
}

interface ITodoCreateable {
  title: string;
  content: string;
}

export interface ITodo extends ITodoEditable {
  isComplete: boolean;
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: [] as ITodo[],
  reducers: {
    create: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload);
      },
      prepare: (payload: ITodoCreateable) => ({
        payload: {
          id: uuid(),
          content: payload.content,
          title: payload.title,
          isComplete: false
        }
      })
    },
    edit: (state, action: PayloadAction<ITodoEditable>) => {
      const payload = action.payload;
      const editedTodo = state.find((todo) => todo.id === payload.id);
      if (editedTodo) {
        editedTodo.content = payload.content;
        editedTodo.title = payload.title;
      }
    },
    toggle: (state, action: PayloadAction<IHasId>) => {
      const payload = action.payload;
      const editedTodo = state.find((todo) => todo.id === payload.id);
      if (editedTodo) {
        editedTodo.isComplete = !editedTodo.isComplete;
      }
    },
    remove: (state, action: PayloadAction<IHasId>) => {
      const payload = action.payload;
      const index = state.findIndex((todo) => todo.id === payload.id);
      if (index > -1) {
        state.splice(index, 1);
      }
    }
  }
});
