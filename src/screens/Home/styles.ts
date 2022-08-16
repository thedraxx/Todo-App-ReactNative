import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

export const MyTextCompleted = styled.Text`
  font-size: 20px;
  color: black;
  left: 15px;
  font-weight: bold;
  top: 5px;
  position: relative;
`

export const MyTextPending = styled.Text`
  font-size: 20px;
  color: black;
  left: 15px;
  font-weight: bold;
  top: 5px;
  position: relative;
`

export const ViewHome = styled.View`
  top: 0;
  background-Color:${colors.white}; 
  padding: 0; 
  flex: 1
`
export const ContainerPending = styled.View`
  flex: 1;
  left:20px
`

export const HorizonalLine = styled.View`
  border-bottom-color: ${colors.gray};
  border-bottom-width: 1px;
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
  
`
