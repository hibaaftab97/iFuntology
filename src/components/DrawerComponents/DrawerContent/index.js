import React, { useState } from 'react';
import styles from './styles';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useDrawerProgress, DrawerContentScrollView, } from '@react-navigation/drawer';
import TextWrapper from '../../TextWrapper';
import { icons, Icons } from '../../../assets/images';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import DrawerButton from '../DrawerButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const routeOrders = [
  'HomeScreen',
  'ContactUsStack',
  'ProfileStack',
  'SettingStack'
];
const drawerRoutes = {
  HomeScreen: {
    label: 'Home',
    icon: icons.download,
  },
  ContactUsStack: {
    label: 'Contact Us',
    icon: icons.download,
  },
  ProfileStack: {
    label: 'Shop',
    icon: icons.download,
  },
  SettingStack: {
    label: 'Setting',
    icon: icons.download,
  },

};


const DrawerContent = props => {
  const navigation = useNavigation();


  const handleOnDrawerItemPress = routeName => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName);
      }
    }
  };



  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: theme.primary,flex:1}}>
      {/* <ImageBackground source={Icons.drawerbg}
        imageStyle={{ width: 80 * vw, height: 50 * vh }}
        resizeMode='cover'
        style={{ width: 80 * vw, height: 20 * vh, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={Icons.logo}
          style={styles.logo} />
      </ImageBackground> */}

      <View style={styles.routeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
        {routeOrders.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={handleOnDrawerItemPress}
              routeName={item}
            />
          );
        })}
        </ScrollView>
      </View>


    </DrawerContentScrollView>
  );
};
export default DrawerContent;
