import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../../components/Button';
import allImages from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import TextWrapper from '../../../components/TextWrapper';
import theme from '../../../utils/theme';

const LoginScreen = props => {

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox headerText="Login"
            bgColor>
            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>
                <View style={{ alignItems: 'center' }}>

                    <GeneralTextInput
                        placeHolder="Email Address*"

                    />
                    <GeneralTextInput
                        secureTextEntry
                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder="Password*"

                    />

                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("ForgotPasswordScreen")}
                    style={{ marginTop: 1 * vh, alignItems: 'flex-end', justifyContent: 'flex-end', paddingRight: 8 * vw }}>

                    <TextWrapper style={{ color: "#004BE5", fontSize: 1.7 * vh }}>Forgot Password?</TextWrapper>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <CommonButton text="Log in"
                        onPress={() => props.navigation.navigate("DrawerNavigator")}
                        buttonStyle={{ marginTop: 4 * vh }} />
                    <View style={{ flexDirection: 'row', marginTop: 2 * vh, alignItems: 'center', }}>
                        <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}>Don’t have an account?</TextWrapper>
                        <TouchableOpacity onPress={() => props.navigation.navigate("RegisterScreen")}>
                            <TextWrapper style={{ color: "#004BE5", fontSize: 1.7 * vh }}> Sign Up</TextWrapper>

                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollWrapper>

        </View>

    );
};
export default LoginScreen;
