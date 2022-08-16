/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    // Todos init state
    todos: []
  },
  reducers: {
    // added todo to todos
    addTodo: (state: { todos: string[] }, { payload }: any) => {
      state.todos.push(payload)
      console.log('fulltareas:', state.todos)
    },

    // remove todo from todosCompleted and add to todos
    ChangeCompleted: (
      state: { todos: string[] },
      { payload }: any
    ) => {
      state.todos.map((task: any) => {
        if (task._id === payload) {
          task.completed = !task.completed
        }
      })
    },

    // remove todo from todos and add to todosCompleted
    RemoveTodo: (state: { todos: string[] }, { payload }: any) => {
      console.log(payload)
      state.todos = state.todos.filter((task: any) => task._id !== payload)
    }
  }
})

// Export the reducers
export const { addTodo, ChangeCompleted, RemoveTodo } =
  todoSlice.actions
