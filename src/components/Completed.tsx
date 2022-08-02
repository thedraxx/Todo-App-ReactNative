import {
  MyTextTask,
  MyTextTaskCompleted,
  ViewCompleted,
  ViewCompletedTasks
} from '../styles/styles'
import { removeCompletedTodo } from '../store/slice/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import React from 'react'

export const Completed = () => {
  const { todosCompleted } = useSelector((state: any) => state.todo)

  const dispatch = useDispatch()

  const HandleSelected = (id: number) => {
    dispatch(removeCompletedTodo(id))
  }
  return (
    <ViewCompleted>
      {todosCompleted.length === 0
        ? (
        <MyTextTaskCompleted>No tasks Completed</MyTextTaskCompleted>
          )
        : (
            todosCompleted.map((task: any) => {
              return (
            <ViewCompletedTasks key={task._id}>
              <BouncyCheckbox
                isChecked={true}
                style={{ padding: 10 }}
                onPress={() => {
                  HandleSelected(task._id)
                }}
              />
              <MyTextTask>{task.title}</MyTextTask>
            </ViewCompletedTasks>
              )
            })
          )}
    </ViewCompleted>
  )
}
