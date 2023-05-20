import * as React from 'react';
import {Easing} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/General/HomeScreen';
import CourseDetailScreen from '../screens/General/CourseDetailScreen';
import InviteStudentScreen from '../screens/General/InviteStudentScreen';
import StudentListScreen from '../screens/General/StudentListScreen';
import StudentDetailScreen from '../screens/General/StudentDetailScreen';
import SettingScreen from '../screens/General/SettingScreen';
import SetPasswordScreen from '../screens/General/SetPasswordScreen';
import EditProfile from '../screens/General/EditProfile';


function SettingStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SettingScreen"
        component={SettingScreen}
      /> 

<Stack.Screen
        options={{headerShown: false}}
        name="SetPasswordScreen"
        component={SetPasswordScreen}
      /> 

<Stack.Screen
        options={{headerShown: false}}
        name="EditProfile"
        component={EditProfile}
      /> 
      
    </Stack.Navigator>
  );
}

export default SettingStack;
