import React, { useState } from 'react';
import { View, Dimensions, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../../components/Button';
import allImages, { icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import TextWrapper from '../../../components/TextWrapper';
import theme from '../../../utils/theme';

const RegisterScreen = props => {

  const [agree, setAgree] = useState(false);

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox  headerText="Teacher Registration">

                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        placeHolder="First Name*"

                    />
                    <GeneralTextInput
                        placeHolder="Last Name*"

                    />
                    <GeneralTextInput
                        placeHolder="Contact Number*"

                    />
                    <GeneralTextInput
                        placeHolder="Email Address*"

                    />
                    <GeneralTextInput
                        secureTextEntry
                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder="Password*"

                    />
                    <GeneralTextInput
                        secureTextEntry
                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder="Confirm Password*"

                    />
                </View>
                <TouchableOpacity
                onPress={()=> setAgree(!agree)}
                 style={{ flexDirection: 'row', marginTop: 2 * vh, paddingLeft: 8 * vw, alignItems: 'center' }}>
                    <View style={styles.box}>
                        {agree===true?<Image  source={icons.tick}
                        style={{width:3*vw,height:3*vw,resizeMode:'contain'}}/>:null}
                    </View>
                    <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}>  I Agree to Terms & Conditions</TextWrapper>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <CommonButton text="Register"
                    onPress={()=> props.navigation.navigate("SubscriptionPlanScreen")}
                        buttonStyle={{ marginTop: 4 * vh }} />
                    <View style={{ flexDirection: 'row', marginTop: 2 * vh, alignItems: 'center' }}>
                        <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}>  Already have an account?</TextWrapper>
                        <TouchableOpacity   onPress={()=> props.navigation.navigate("LoginScreen")}>
                            <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}> Login</TextWrapper>

                        </TouchableOpacity>
                    </View>

                </View>




            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default RegisterScreen;
