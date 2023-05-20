import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity, Image } from 'react-native';
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

const EditProfile = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox headerText="Edit Profile"
                bgColor
                backbutton>

                <View style={{ alignItems: 'center' }}>

                    <GeneralTextInput

                        placeHolder="Enter First Name"
                        label="First Name*"


                    />
                    <GeneralTextInput
                        label="Last Name*"

                        placeHolder="Enter Last Name"

                    />
                </View>

                <View style={styles.customStyle}>
                    <View   style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={icons.flag} 
                    style={{width:8*vw,height:8*vw,resizeMode:'contain'}}/>
                     <Image source={icons.dropdown} 
                    style={{width:4*vw,height:4*vw,resizeMode:'contain'}}/>
                    </View>
                   
                </View>



                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        secureTextEntry
                        label="Confirm Password*"

                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder=""

                    />
                    <CommonButton text="Save"
                        buttonStyle={{ marginTop: 4 * vh }} />


                </View>




            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default EditProfile;
