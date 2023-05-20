import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/General/HomeScreen';
import CourseDetailScreen from '../screens/General/CourseDetailScreen';
import InviteStudentScreen from '../screens/General/InviteStudentScreen';


function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="RegisterScreen"
        component={HomeScreen}
      /> 
       <Stack.Screen
        options={{headerShown: false}}
        name="CourseDetailScreen"
        component={CourseDetailScreen}
      /> 
      <Stack.Screen
        options={{headerShown: false}}
        name="InviteStudentScreen"
        component={InviteStudentScreen}
      /> 
    </Stack.Navigator>
  );
}

export default HomeStack;
