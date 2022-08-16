import React from 'react'
import { useSelector } from 'react-redux'
import { ImageUser, SuperViewUser, TextLen, TextUsser, ViewUser } from './style'

const MyUser = () => {
  const { todos } = useSelector((state: any) => state.todo)
  return (
    <SuperViewUser>
      <ViewUser>
        <ImageUser source={require('../../assets/icon/Wonder-women-01.png')} />
        <TextUsser>Hey, Diana </TextUsser>
          <TextLen>{todos.length} tasks</TextLen>
      </ViewUser>
    </SuperViewUser>
  )
}
export default MyUser
