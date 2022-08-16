import React from 'react'
import { Pending } from './Pending/Pending'
import { ContainerPending, HorizonalLine, ViewHome } from './styles'
import MyUser from '../../components/user/MyUser'
import ButtonNewTask from '../../components/buttons/NewTask/ButtonNewTask'

const HomeScreen = ({ navigation }: any) => (
    <ViewHome>
      <MyUser />
      <HorizonalLine />
      {/* Component Pending Tasks */}
      <ContainerPending >
      <Pending />
      </ContainerPending>
      {/* OnPress Buton, navigate to screen to add a new task */}
      <ButtonNewTask navigation = {navigation}/>
    </ViewHome>
)
export default HomeScreen
