import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

export const ViewButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    bottom: 20px;
`

export const MyButonHome = styled.TouchableHighlight`
  background-color: ${colors.green};
  width: 80%;
  padding: 5% 0;
  border-radius: 10px;
  flex-direction: column;
`

export const TextButon = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`
