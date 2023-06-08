import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Animated, TouchableOpacity, LayoutAnimation, ImageBackground } from 'react-native';
import ScrollWrapper from '../../../components/ScrollWrapper';
import TextWrapper from '../../../components/TextWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import styles from './styles';
import { vh, vw } from '../../../units';
import BackgroundBox from '../../../components/BackgroundBox';
import CommonButton from '../../../components/Button';


const ForgotPasswordScreen = props => {
  const [step, setStep] = useState(1);


  const renderConditionalFields = () => {
    if (step == 1) {
      return (
        <View style={styles.fieldsView}>
          <View style={{alignItems:'center'}}>
          <TextWrapper style={styles.shortdes}>Enter your email address to receive a verification code</TextWrapper>

          <GeneralTextInput
            viewCon={{ marginTop: 2 * vh }}
            placeHolder="Email Address*"
          />
          <CommonButton text="Continue"
          onPress={()=>handleOnPress()}
            buttonStyle={{ marginTop: 4 * vh }} />
          <TouchableOpacity style={{ marginTop: 2 * vh }}
          onPress={()=> props.navigation.navigate("LoginScreen")}>
            <TextWrapper style={styles.shortdes}>Back to Login</TextWrapper>

          </TouchableOpacity>
          </View>

        </View>
      );
    }
    if (step == 2) {
      return (
        <View style={styles.fieldsView}>
          <View style={{alignItems:'center'}}>

          <TextWrapper style={styles.shortdes}>An email has been sent to you with a verification code. Please enter it here.</TextWrapper>


          <GeneralTextInput
            viewCon={{ marginTop: 2 * vh }}

            placeHolder="Enter Verification Code*"
          />
          </View>


          <TouchableOpacity style={{ marginTop: 2 * vh, alignItems: 'flex-end' }}>
            <TextWrapper style={[styles.shortdes,{paddingRight:8*vw,color:"#004BE5"}]}>Resend Code?</TextWrapper>

          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
          

          <CommonButton text="Continue"
          onPress={()=>handleOnPress()}

            buttonStyle={{ marginTop: 4 * vh }} />
          <TouchableOpacity style={{ marginTop: 2 * vh }}
          onPress={()=> props.navigation.navigate("LoginScreen")}>
            <TextWrapper style={styles.shortdes}>Back to Login</TextWrapper>

          </TouchableOpacity>
          </View>


        </View>
      );
    }
    if (step == 3) {
      return (
        <View style={styles.fieldsView}>
           <View style={{alignItems:'center'}}>
          <TextWrapper style={styles.shortdes}>Type in a new password</TextWrapper>

          <GeneralTextInput
            viewCon={{ marginTop: 2 * vh }}
            placeHolder="Enter Password*"
          />
          <GeneralTextInput
            placeHolder="Confirm Password*"
          />
          <CommonButton text="Update"
          onPress={()=>handleOnPress()}
            buttonStyle={{ marginTop: 4 * vh }} />
          <TouchableOpacity style={{ marginTop: 2 * vh }}
          onPress={()=> props.navigation.navigate("LoginScreen")}>
            <TextWrapper style={styles.shortdes}>Back to Login</TextWrapper>

          </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  const handleOnPress = () => {
    if (step == 1) {
      setStep(step+1)
      // Animated.timing(animation, {
      //   toValue: 40,
      // }).start();
    }
    if (step == 2) {
      // Animated.timing(animation, {
      //   toValue: 60,
      // }).start();
      setStep(step+1)

    }
    if(step==3){
      props.navigation.navigate("LoginScreen");
    }
  }

  return (
 <View  style={{flex:1}}>
      <BackgroundBox headerText="Forgot Password"
      bgColor>

      </BackgroundBox>
         <ScrollWrapper avoidKeyboard={true}>
      {renderConditionalFields()}

    </ScrollWrapper>
    </View>
  );
};
export default ForgotPasswordScreen;
