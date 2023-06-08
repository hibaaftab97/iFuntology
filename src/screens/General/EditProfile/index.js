import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import CommonButton from '../../../components/Button';
import allImages, { icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import TextWrapper from '../../../components/TextWrapper';

const EditProfile = props => {

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox headerText="Edit Profile"
                bgColor
                backbutton>




            </BackgroundBox>

            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>
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
                <TextWrapper style={styles.label}>Mobile No*</TextWrapper>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>

                    <View style={styles.customStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Image source={icons.flag}
                                style={{ width: 6 * vw, height: 6 * vw, resizeMode: 'contain' }} />
                            <Image source={icons.dropdown}
                                style={{ width: 3 * vw, height: 3 * vw, resizeMode: 'contain' }} />
                        </View>



                    </View>
                    <View style={[styles.customStyle, { width: 50 * vw, }]}>

                    </View>

                </View>

                <View style={{ alignItems: 'center' }}>

                    <CommonButton text="Save"
                        buttonStyle={{ marginTop: 4 * vh }} />


                </View>

            </ScrollWrapper>
        </View>

    );
};
export default EditProfile;
