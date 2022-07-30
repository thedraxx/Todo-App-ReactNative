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
        <Stack.Navigator initialRouteName="To-Do App">
          {/* Screen Home */}
          <Stack.Screen name="To-Do App" component={HomeScreen} />
          {/* Screen NewTask */}
          <Stack.Screen name="Add task" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
