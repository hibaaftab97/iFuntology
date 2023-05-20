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

const SubscriptionPlanScreen = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox  headerText="Buy Subscription Plan">

                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        placeHolder="Card Holder Name*"

                    />
                    <GeneralTextInput
                        placeHolder="Card Number*"

                    />
                    <GeneralTextInput
                        placeHolder="Date of Expiry*"

                    />
                    <GeneralTextInput
                        placeHolder="CVV*"

                    />
                
                
                </View>
             

                <View style={{ alignItems: 'center',justifyContent:'flex-end' ,height:30*vh}}>
                    <CommonButton text="Pay Now"
                        buttonStyle={{ marginTop: 8 * vh }} />
                

                </View>




            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default SubscriptionPlanScreen;
