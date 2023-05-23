import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import RegisterScreen from '../screens/Auth/TeacherRegistration';
import SubscriptionPlanScreen from '../screens/Auth/SubscriptionPlan';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import DrawerNavigator from './DrawerNavigator';


function MainNavigator() {

  const Stack = createStackNavigator();


  return (
    <Stack.Navigator>

      <Stack.Screen
        options={{ headerShown: false }}
        name="AuthStack"
        component={AuthStack}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="DrawerNavigator"
        component={DrawerNavigator}
      />

    </Stack.Navigator>
  );
}

export default MainNavigator;
