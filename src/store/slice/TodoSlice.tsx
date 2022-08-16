/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    // added todo to todos
    addTodo: (state: { todos: any[] }, { payload }: any) => {
      state.todos.push(payload)
      console.log('desde addtodo', state.todos)
    },

    ChangeCompleted: (state: { todos:any[]}, { payload }: any) => {
      return state.todos.map((task: any) => {
        if (task._id === payload) {
          task.completed = !task.completed
        }
      })
    }

  }
})

// Export the reducers
export const { addTodo, ChangeCompleted } = todoSlice.actions
