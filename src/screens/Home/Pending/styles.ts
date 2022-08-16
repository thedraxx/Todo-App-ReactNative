
import styled from 'styled-components/native'
import { colors } from '../../../utilities/colors'

export const MyTextTaskPending = styled.Text`
font-size: 15px;
  color: black;
  top:10px;
`
export const ViewPending = styled.View`
  position: relative;
  left: 12px;
  top: 0px;
  padding-top: 2px;
  padding-bottom: 20px;
`
export const MyTextTask = styled.Text`
  font-size: 20px;
  color: ${colors.black};
`

export const MyTextTaskCompleted = styled(MyTextTask)`
  color: ${colors.green};
`

export const ViewCompletedTasks = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 15px;
  width:70%
`
