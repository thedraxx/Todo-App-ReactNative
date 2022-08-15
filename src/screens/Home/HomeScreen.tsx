import React from 'react'
import { Pending } from './Pending/Pending'

import MyButton from '../../components/buttons/MyButton'
import { MyTextPending, ViewHome } from './styles'

const HomeScreen = ({ navigation }: any) => (
    <ViewHome>
      <MyTextPending>Pending Tasks</MyTextPending>
      {/* Component Pending Tasks */}
      <Pending />
      {/* OnPress Buton, navigate to screen to add a new task */}
      <MyButton navigation = {navigation}/>
    </ViewHome>
)
export default HomeScreen
