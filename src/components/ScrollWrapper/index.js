import React from 'react';
import { ScrollView, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { vh } from '../../units';
const ScrollWrapper = props => {
  const Scrollable = props.avoidKeyboard ? KeyboardAwareScrollView : ScrollView;
  return (
    <Scrollable showsVerticalScrollIndicator={false} {...props}
      style={{
        position:'absolute',
        top:35*vh,
        bottom:0,
        left:0,
        right:0,
      }}>
      {props.children}
    </Scrollable>

  );
};
export default ScrollWrapper;
