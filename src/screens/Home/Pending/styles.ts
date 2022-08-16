
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  width:90%
`

export const RemoveText = styled.Text`
  color: ${colors.red};
  font-size: 20px;
  font-weight: bold;
`
export const ContainerTextTask = styled.View`
  display: flex;
  flex-direction: row;
  width: 70%;
`
