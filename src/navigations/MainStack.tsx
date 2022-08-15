import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home/HomeScreen'
import NewTask from '../screens/AddTask/NewTask'
import { colors } from '../utilities/colors'

const Stack = createNativeStackNavigator()
const MainStack = () => (
    <>
    {/* Using navigation for navigate between screens */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="To-Do App" >
          {/* Screen Home */}
          <Stack.Screen name="To-Do App" component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: `${colors.white}`
            },
            title: ' 📔 Inbox',
            headerTintColor: `${colors.black}`,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25
            }
          }}
          />
          {/* Screen NewTask */}
          <Stack.Screen name="Add task" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
)

export default MainStack
