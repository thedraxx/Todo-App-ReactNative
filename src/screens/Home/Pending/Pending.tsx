import { useSelector } from 'react-redux'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { MyTextTask, MyTextTaskPending, ViewCompletedTasks, ViewPending } from './styles'
// import { MyButton } from '../../../components/buttons/MyButton'

export const Pending = () => {
  const { todos } = useSelector((state: any) => state.todo)

  const [Tasks, setTasks] = useState([])

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
                style={{ padding: 10 }}
              />
              <MyTextTask>{item.title}</MyTextTask>

            </ViewCompletedTasks>
          )}
    </ViewPending>
      )}
    />
  )
}
