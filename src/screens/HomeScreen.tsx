import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Completed} from '../components/Completed';
import {Pending} from '../components/Pending';

export const HomeScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Todo-App</Text>
      <Completed />
      <Pending />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('NewTask')}
      />
    </View>
  );
};
