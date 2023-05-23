import React, { useState } from 'react';
import { View,  } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import CommonButton from '../../../components/Button';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';

const PurchaseOrderScreen = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Purchase Order">

                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        placeHolder="Card Holder Name*"

                    />
                    <GeneralTextInput
                        placeHolder="Card Number*"

                    />

                    <GeneralTextInput
                        placeHolder="Card Expiry*"

                    />
                    <GeneralTextInput
                        placeHolder="Card CVV*"

                    />
                    <CommonButton text="Buy Now"
                       colors
                       startColor="#4C4C4C"
                       onPress={() => { props.navigation.pop()}}
                       endColor="#101010" 
                        buttonStyle={{ marginTop: 4 * vh }} />
                </View>


            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default PurchaseOrderScreen;
