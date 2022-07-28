import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {NewTask} from '../screens/NewTask';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          {/* Home */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {/* NewTask */}
          <Stack.Screen name="NewTask" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
