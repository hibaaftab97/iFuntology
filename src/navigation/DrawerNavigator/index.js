import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerComponents/DrawerContent';

import HomeScreen from '../../screens/General/HomeScreen';

import { vh, vw } from '../../units';
import HomeStack from '../HomeStack';
import ContactUsScreen from '../../screens/General/ContactUsScreen';
import SettingStack from '../SettingStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {

  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: 60 * vw,
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          borderRadius: 1.5 * vh,
          shadowRadius: 4 * vw,
          elevation: 10,
        },
        sceneContainerStyle: { backgroundColor: 'black' },
      }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="ContactUsStack" component={ContactUsScreen} />
      <Drawer.Screen name="SettingStack" component={SettingStack} />
  


    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
