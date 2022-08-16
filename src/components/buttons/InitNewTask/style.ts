import styled from 'styled-components/native'
import { colors } from '../../../utilities/colors'

export const TextButon = styled.Text`
  color: ${colors.white};
  font-size: 15px;
`

export const ContainerButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  bottom:0px;
`
export const MyButton = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: ${colors.blue};
  width:100%;
  padding: 5% 0;
  border-radius: 10px;
  flex-direction: column;
  top: 0
`
