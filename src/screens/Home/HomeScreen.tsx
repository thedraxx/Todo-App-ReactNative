import React from 'react'
import { Completed } from './Complete/Completed'
import { Pending } from './Pending/Pending'

import MyButton from '../../components/buttons/MyButton'
import { MyTextCompleted, MyTextPending, ViewHome } from './styles'

const HomeScreen = ({ navigation }: any) => (
    <ViewHome>
      <MyTextCompleted>Completed Tasks</MyTextCompleted>
      {/* Component Completed Tasks */}
      <Completed />
      <MyTextPending>Pending Tasks</MyTextPending>
      {/* Component Pending Tasks */}
      <Pending />
      {/* OnPress Buton, navigate to screen to add a new task */}
      <MyButton navigation = {navigation}/>
    </ViewHome>
)
export default HomeScreen
