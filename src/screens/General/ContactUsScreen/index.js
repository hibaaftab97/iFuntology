import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../../units';
import ScrollWrapper from '../../../components/ScrollWrapper';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';
import CommonButton from '../../../components/Button';
import BackgroundBox from '../../../components/BackgroundBox';


const ContactUsScreen = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox  headerText="Contact Us"
            type="drawer">

                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        placeHolder="Full Name*"

                    />
                   
                    <GeneralTextInput
                        placeHolder="Email Address*"

                    />
                    <GeneralTextInput
                        
                        placeHolder="Subject*"

                    />
                    <GeneralTextInput
                        multiline={true}
                        conStyle={{ height: 25 * vh }}

                        placeHolder="Message Here*"

                    />
                </View>
                

                <View style={{ alignItems: 'center' }}>
                    <CommonButton text="Submit"
                        buttonStyle={{ marginTop: 4 * vh }} />
                  

                </View>




            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default ContactUsScreen;
