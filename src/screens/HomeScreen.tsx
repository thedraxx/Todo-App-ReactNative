import React from 'react'
import { View } from 'react-native'
import { Completed } from '../components/Completed'
import { Pending } from '../components/Pending'
import {
  MyTextCompleted,
  MyTextPending,
  TextButon,
  ViewHome,
  MyButonHome
} from '../styles/styles'

export function HomeScreen ({ navigation }: any) {
  return (
    <ViewHome>
      <MyTextCompleted>Completed Tasks</MyTextCompleted>
      {/* Component Completed Tasks */}
      <Completed />
      <MyTextPending>Pending Tasks</MyTextPending>
      {/* Component Pending Tasks */}
      <Pending />
      {/* OnPress Buton, navigate to screen to add a new task */}
      <MyButonHome onPress={() => navigation.navigate('Add task')}>
        <View>
          <TextButon>Add a task </TextButon>
        </View>
      </MyButonHome>
    </ViewHome>
  )
}
