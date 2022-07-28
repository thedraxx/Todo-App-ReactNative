import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    //  Cuando los pokemons empiezan a cargar
    addTodo: () => {},
  },
});

// Exportamos las funciones creadores de acciones
export const {addTodo} = todoSlice.actions;
