import { useDispatch, useSelector } from 'react-redux'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { ChangeCompleted } from '../../../store/slice/TodoSlice'
import { MyTextTask, MyTextTaskCompleted, MyTextTaskPending, ViewCompletedTasks, ViewPending } from './styles'

export const Pending = () => {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: any) => state.todo)

  const [Tasks, setTasks] = useState([])
  const [checkboxState, setCheckboxState] = React.useState(false)

  const HandleSelected = (id: number) => {
    setCheckboxState(!checkboxState)
    dispatch(ChangeCompleted(id))
  }

  useEffect(() => {
    setTasks(todos)
  }, [todos])

  return (
    <FlatList
      data={Tasks}
      keyExtractor={(item) => item._id}
      // ListFooterComponent = { <MyButton /> }
      renderItem={({ item }) => (
        <ViewPending>
          {Tasks.length === 0
            ? (
              <MyTextTaskPending>All Clear!</MyTextTaskPending>
              )
            : (
              <ViewCompletedTasks key={item._id}>
                <BouncyCheckbox
                  isChecked={false}
                  style={{ marginRight: 5 }}
                  size={25}
                  fillColor="green"
                  iconStyle={{ borderColor: 'red' }}
                  onPress={() => HandleSelected(item._id)}
                />
                {
                  item.completed
                    ? <MyTextTaskCompleted>{item.title}</MyTextTaskCompleted>
                    : <MyTextTask>{item.title}</MyTextTask>
                }

              </ViewCompletedTasks>
              )}
        </ViewPending>
      )}
    />
  )
}
