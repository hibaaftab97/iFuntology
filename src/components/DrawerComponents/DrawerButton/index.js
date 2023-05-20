import { useDrawerProgress } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { icons, Icons } from '../../../assets/images';
import { vw, vh } from '../../../units';
import TextWrapper from '../../TextWrapper';

import styles from './styles';

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

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DrawerButton = props => {
  // const progress = useDrawerProgress();
  // const translateX = Animated.interpolateNode(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-40 * vw * (props.index + 1), 0],
  // });
  // const animatedStyles = {
  //   transform: [{translateX}],
  // };
  const routeConfigs = drawerRoutes[props.routeName];

  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.routeName)}
      style={[styles.container]}>
      <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'space-between' }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image style={styles.icon} source={routeConfigs.icon} />
          <TextWrapper style={styles.label}>{routeConfigs.label}</TextWrapper>
        </View>

      </View>



    </TouchableOpacity>
  );
};

export default DrawerButton;
