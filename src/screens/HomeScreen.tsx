import React from 'react';
import {Button, Text, View} from 'react-native';
import {Completed} from '../components/Completed';
import {Pending} from '../components/Pending';
import styled from 'styled-components/native';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <MyText>Todo-App</MyText>
      <Completed />
      <Pending />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('NewTask')}
      />
    </View>
  );
};

export const MyText = styled.Text`
  font-size: 25;
  color: black;
`;
