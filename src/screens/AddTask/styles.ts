import styled from 'styled-components/native'
import { colors } from '../../utilities/colors'

export const ButtonDeadline = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
  border-radius: 10px;
  padding: 15px;
  width: 90%;
`
export const ButtonTime = styled.TouchableHighlight`
  align-items: center;
  background-color:  ${colors.gray};
  border-radius: 15px;
  padding: 15px;
  display: flex;
  width: 30%;
`

export const ViewStartEnd = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  top:50px
`

export const GeneralView = styled.View`
  flex: 1;
  background-color:  ${colors.gray};
  width: 100%;
`

export const TextDeadLine = styled.Text`
  color: ${colors.black};
  font-size: 15px;
  left: 25px;
  top: -5px;
  font-weight: bold;
`

export const TextDreopdown = styled.Text`
  color: ${colors.black};
  font-size: 15px;
  font-weight: bold;
  margin-top:15px;
`

export const TextTime = styled.Text`
  color: ${colors.black};
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`

export const TextTimeInput = styled.Text`
  color: ${colors.darkGray};
  font-size: 15px;
`

export const TextTitles = styled.Text`
  color: ${colors.black};
  font-size: 15px;
  left: 25px;
  top: 15px;
  font-weight: bold;
`

export const ViewPicker = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ViewTime = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  top: 50px;
  text-align: end;
`

export const ViewDeadline = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ViewPickerRemind = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 70px;
`

export const ViewPickerRepeat = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top:55px;
`

export const MyButon = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: ${colors.green};
  width: 50%;
  padding: 5% 0;
  border-radius: 10px;
  flex-direction: column;
`

export const ViewNewTask = styled.View`
  background-color: ${colors.white};
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const TextInputCustom = styled.TextInput`
  border-color: ${colors.gray};
  background-color: ${colors.gray};
  color: ${colors.black};
  padding: 15px;
  margin: 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

export const ContainerTittle = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
  
`
export const ContainerDeadline = styled.View` 
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 20px;
`

export const ContNameTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 90%;
  text-align: center;
`
