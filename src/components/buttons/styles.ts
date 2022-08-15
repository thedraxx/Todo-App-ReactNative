import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

export const ViewButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 10px;
    right: 10px;
    position: absolute;
`

export const MyButonHome = styled.TouchableHighlight`
  background-color: ${colors.green};
  display: flex;
  flex-direction: row;
  width: 70px;
  height: 70px;
  padding: 0;
  border-radius: 10px;
  flex-direction: row;
  border-radius: 100px;
  right:0px;
  align-items: center;
  justify-content: center;
`

export const TextButon = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  align-self: center;
  justify-content: center;

`
