/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    // Todos init state
    todos: [],
    // Todos Completed state
    todosCompleted: []
  },
  reducers: {
    // added todo to todos
    addTodo: (state: {todos: string[]}, { payload }: any) => {
      state.todos.push(payload)
    },
    // add todo to todoCompleted
    addTodoCompleted: (
      state: {todosCompleted: string[]; todos: string[]},
      { payload }: any
    ) => {
      state.todos.map((task: any) => {
        if (task._id === payload) {
          state.todosCompleted.push(task)
          state.todos = state.todos.filter((task: any) => task._id !== payload)
        }
      })
    },
    // remove todo from todosCompleted and add to todos
    removeCompletedTodo: (
      state: {todosCompleted: string[]; todos: string[]},
      { payload }: any
    ) => {
      state.todosCompleted.map((task: any) => {
        if (task._id === payload) {
          state.todos.push(task)
          state.todosCompleted = state.todosCompleted.filter(
            (task: any) => task._id !== payload
          )
        }
      })
    }
  }
})

// Export the reducers
export const { addTodo, addTodoCompleted, removeCompletedTodo } =
  todoSlice.actions
