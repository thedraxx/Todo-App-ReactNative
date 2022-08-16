import React from 'react'
import { Alert, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../../store/slice/TodoSlice'
import { ContainerButton, MyButton, TextButon } from './style'

export const ButtonInitNewTask = ({ onChange, navigation }) => {
  console.log('desde ButtonInitNewTask', onChange)
  // Dispatch redux
  const dispatch = useDispatch()
  //  When the user press the button to add a new task
  const handleSubmit = () => {
    if (onChange.title === '' || onChange.deadline === '' || onChange.startTime === '' || onChange.endTime === '' || onChange.Remind === '' || onChange.repeat === '') {
      return Alert.alert('Please fill all the fields')
    } else {
      dispatch(addTodo(onChange))
      navigation.navigate('To-Do App')
    }
  }

  return (
    <ContainerButton>
      <MyButton onPress={handleSubmit}>
        <View>
          <TextButon>Create a Task</TextButon>
        </View>
      </MyButton>
    </ContainerButton>

  )
}
