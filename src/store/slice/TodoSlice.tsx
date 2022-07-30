import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    todosCompleted: [],
  },
  reducers: {
    //  Cuando los pokemons empiezan a cargar
    addTodo: (state: {todos: string[]}, {payload}: any) => {
      state.todos.push(payload);
    },
    addTodoCompleted: (
      state: {todosCompleted: string[]; todos: string[]},
      {payload}: any,
    ) => {
      // ! Agregar todo al array de todo completado
      state.todos.map((task: any) => {
        if (task._id === payload) {
          state.todosCompleted.push(task);
          state.todos = state.todos.filter((task: any) => task._id !== payload);
        }
      });
    },
    removeCompletedTodo: (
      state: {todosCompleted: string[]; todos: string[]},
      {payload}: any,
    ) => {
      state.todosCompleted.map((task: any) => {
        if (task._id === payload) {
          state.todos.push(task);
          state.todosCompleted = state.todosCompleted.filter(
            (task: any) => task._id !== payload,
          );
        }
      });
    },
  },
});

// Exportamos las funciones creadores de acciones
export const {addTodo, addTodoCompleted, removeCompletedTodo} =
  todoSlice.actions;
