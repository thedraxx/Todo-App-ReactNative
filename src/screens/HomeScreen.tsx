import React from 'react'
import { View } from 'react-native'
import { Completed } from '../components/Completed'
import { Pending } from '../components/Pending'
import {
  MyButon,
  MyTextCompleted,
  MyTextPending,
  TextButon
} from '../styles/styles'

export function HomeScreen ({ navigation }: any) {
  return (
    <View style={{
      top: 0, backgroundColor: 'white', padding: 0, flex: 1
    }}
    >
      <MyTextCompleted>Completed Tasks</MyTextCompleted>
      {/* Component Completed Tasks */}
      <Completed />
      <MyTextPending>Pending Tasks</MyTextPending>
      {/* Component Pending Tasks */}
      <Pending />
      {/* OnPress Buton, navigate to screen to add a new task */}
      <MyButon onPress={() => navigation.navigate('Add task')}>
        <View>
          <TextButon>Add a task </TextButon>
        </View>
      </MyButon>
    </View>
  )
}
