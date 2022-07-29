import React from 'react';
import {Button, Text, View, TouchableHighlight} from 'react-native';
import {Completed} from '../components/Completed';
import {Pending} from '../components/Pending';
import styled from 'styled-components/native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View style={{top: 0, backgroundColor: 'white', padding: 0, flex: 1}}>
      <MyTextCompleted>Completed Tasks</MyTextCompleted>
      <Completed />
      <MyTextPending>Pending Tasks</MyTextPending>
      <Pending />
      <MyButon onPress={() => navigation.navigate('Add task')}>
        <View>
          <TextButon>Add a task</TextButon>
        </View>
      </MyButon>
    </View>
  );
};

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

const MyButon = styled.TouchableHighlight`
  position: absolute;
  display: flex;
  background-color: #50e587;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 5%;
  border-radius: 10px;
  bottom: 20px;
  left: 25%;
  right: 25%;
`;

const TextButon = styled.Text`
  font-size: 15px;
  color: white;
`;
