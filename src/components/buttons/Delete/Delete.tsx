import React from 'react'
import { useDispatch } from 'react-redux'
import { RemoveText } from '../../../screens/Home/Pending/styles'
import { RemoveTodo } from '../../../store/slice/TodoSlice'
import { ButtonRemove, ContainerButtonRemove } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Delete = ({ item }) => {
  const dispatch = useDispatch()

  const RemoveTask = (id: number) => {
    dispatch(RemoveTodo(id))
  }

  return (
    <ContainerButtonRemove>
    <ButtonRemove onPress={() => RemoveTask(item) }>
      <Icon name="delete" size={20} color="red" />
    </ButtonRemove>
  </ContainerButtonRemove>
  )
}
