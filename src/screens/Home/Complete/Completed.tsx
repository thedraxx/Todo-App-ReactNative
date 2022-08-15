
import { removeCompletedTodo } from '../../../store/slice/TodoSlice'
import { useDispatch, useSelector } from 'react-redux'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import React from 'react'
import { ListCustom, MyTextTask, MyTextTaskCompleted, ViewCompleted, ViewCompletedTasks } from './styles'
// import { MyButton } from '../../../components/buttons/MyButton'

export const Completed = () => {
  const { todosCompleted } = useSelector((state: any) => state.todo)

  const dispatch = useDispatch()

  const HandleSelected = (id: number) => {
    dispatch(removeCompletedTodo(id))
  }
  return (
    <ListCustom
      data={todosCompleted}
      keyExtractor={(item: { _id: number }) => item._id}
      // ListFooterComponent = { <MyButton /> }
      renderItem={({ item }:any) => (
        <ViewCompleted>
          {
            todosCompleted.length === 0
              ? (
                <MyTextTaskCompleted>No tasks Completed</MyTextTaskCompleted>
                )
              : (
                <ViewCompletedTasks key={item._id}>
                  <BouncyCheckbox
                    isChecked={true}
                    style={{ padding: 10 }}
                    onPress={() => {
                      HandleSelected(item._id)
                    }} />
                  <MyTextTask>{item.title}</MyTextTask>
                </ViewCompletedTasks>
                )}
        </ViewCompleted>
      )} />
  )
}
