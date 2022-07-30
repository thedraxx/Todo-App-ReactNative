
import styled from 'styled-components/native';

// NewTask Styles
export const GeneralView = styled.View`
  flex: 1;
  background-color: #ededed;
  width: 100%;
`;

export const TextTitles = styled.Text`
  color: #000000;
  font-size: 15px;
  left: 25px;
  top: 15px;
  font-weight: bold;
`;

export const TextButon = styled.Text`
  color: #ffffff;
  font-size: 15px;
`;

export const ButtonTime = styled.TouchableHighlight`
  align-items: center;
  background-color: #ededed;
  border-radius: 15px;
  padding: 15px;
  display: flex;
  width: 30%;
`;

export const ButtonDeadline = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  border-radius: 10px;
  padding: 15px;
  width: 90%;
`;

export const ViewTime = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
`;

export const CustomView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const TextTime = styled.Text`
  color: #000000;
  font-size: 15px;
  font-weight: bold;
  margin-top: 5px;
`;

export const TextTimeInput = styled.Text`
  color: #7c7c7c;
  font-size: 15px;
`;

export const TextDeadLine = styled.Text`
  color: #000000;
  font-size: 15px;
  left: 25px;
  top: -5px;
  font-weight: bold;
`;

// HomeScreen Styles
export const MyTextCompleted = styled.Text`
  font-size: 20px;
  color: black;
  left: 15px;
  font-weight: bold;
  top: 5px;
  position: relative;
`;

export const MyTextPending = styled.Text`
  font-size: 20px;
  color: black;
  left: 15px;
  font-weight: bold;
  top: 5px;
  position: relative;
`;

export const MyButon = styled.TouchableHighlight`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: #50e587;
  position: relative;
  width: 50%;
  padding: 5% 0;
  border-radius: 10px;
`;

// Completed 
export const MyText = styled.Text`
  font-size: 15px;
  color: black;
`;

export const MyTextTaskCompleted = styled.Text`
font-size: 15px;
  color: black;
  top:10px;
`

export const ViewCompleted = styled.View`
  position: relative;
  left: 12px;
  top: 0px;
  padding-top: 2px;
  padding-bottom: 20px;
`;

export const MyTextTask = styled.Text`
  font-size: 15px;
  color: black;


`;
export const ViewCompletedTasks = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 15px;
`;


// Pending

export const ViewPending = styled.View`
  position: relative;
  left: 12px;
  top: 0px;
  padding-top: 2px;
  padding-bottom: 20px;
`;


export const MyTextTaskPending = styled.Text`
font-size: 15px;
  color: black;
  top:10px;
`