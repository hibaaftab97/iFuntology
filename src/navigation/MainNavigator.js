import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import RegisterScreen from '../screens/Auth/TeacherRegistration';
import SubscriptionPlanScreen from '../screens/Auth/SubscriptionPlan';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';


function MainNavigator() {

  const Stack = createStackNavigator();


  return (
    <Stack.Navigator>
  <Stack.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={HomeStack}
      />
         <Stack.Screen
        options={{ headerShown: false }}
        name="AuthStack"
        component={AuthStack}
      />
    
    </Stack.Navigator>
  );
}

export default MainNavigator;