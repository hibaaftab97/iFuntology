import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import CommonButton from '../../../components/Button';
import BackgroundBox from '../../../components/BackgroundBox';

const SetPasswordScreen = props => {

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox headerText="Set Password"
                bgColor
                backbutton>






            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>
                <View style={{ alignItems: 'center' }}>

                    <GeneralTextInput
                        secureTextEntry
                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder=""
                        label="Current Password*"


                    />
                    <GeneralTextInput
                        secureTextEntry
                        label="New Password*"

                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder=""

                    />
                    <GeneralTextInput
                        secureTextEntry
                        label="Confirm Password*"

                        inputViewStyle={{ width: 70 * vw }}
                        placeHolder=""

                    />
                </View>


                <View style={{ alignItems: 'center' }}>
                    <CommonButton text="Save"
                        buttonStyle={{ marginTop: 4 * vh }} />


                </View>
            </ScrollWrapper>
        </View>

    );
};
export default SetPasswordScreen;
