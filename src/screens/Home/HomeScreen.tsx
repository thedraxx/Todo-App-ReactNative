import React from 'react'
import { Pending } from './Pending/Pending'

import MyButton from '../../components/buttons/MyButton'
import { ContainerPending, HorizonalLine, MyTextPending, ViewHome } from './styles'
import MyUser from '../../components/user/MyUser'

const HomeScreen = ({ navigation }: any) => (
    <ViewHome>
      <MyUser />
      <HorizonalLine />
      {/* Component Pending Tasks */}
      <ContainerPending >
      <Pending />
      </ContainerPending>
      {/* OnPress Buton, navigate to screen to add a new task */}
      <MyButton navigation = {navigation}/>
    </ViewHome>
)
export default HomeScreen
