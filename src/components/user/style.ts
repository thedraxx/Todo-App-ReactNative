import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

export const SuperViewUser = styled.View`
  flex: 1;
  background-color: ${colors.white};
  width: 100%;
`

export const ViewUser = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageUser = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;

`
export const TextUsser = styled.Text`
    font-size: 25px;
    color: ${colors.black};
    margin-top: 10px;
    font-weight: bold;
 `
export const TextLen = styled.Text`
    font-size: 15px;
`
