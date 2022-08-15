import React from 'react'
import { View } from 'react-native'
import { MyButonHome, TextButon, ViewButton } from './styles'

const MyButton = ({ navigation }: {navigation: any}) => {
  return (
    <ViewButton add prop-typesutton>
      <MyButonHome onPress={() => navigation.navigate('Add task')}>
        <View>
          <TextButon>Add a task </TextButon>
        </View>
      </MyButonHome>
    </ViewButton>
  )
}

export default MyButton
