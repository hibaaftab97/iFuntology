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
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox  headerText="Set Password"
            bgColor
            backbutton>

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




            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default SetPasswordScreen;
