import React from 'react'
import { View } from 'react-native'
import { MyButonHome, TextButon, ViewButton } from './styles'

const ButtonNewTask = ({ navigation }: {navigation: any}) => {
  return (
    <ViewButton>
      <MyButonHome onPress={() => navigation.navigate('Add task')}>
        <View>
          <TextButon> + </TextButon>
        </View>
      </MyButonHome>
    </ViewButton>
  )
}

export default ButtonNewTask
