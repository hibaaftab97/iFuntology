import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import CommonButton from '../../../components/Button';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';

const PurchaseOrderScreen = props => {

    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Purchase Order">



            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
                contentContainerStyle={styles.content}>

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
                        onPress={() => { props.navigation.pop() }}
                        endColor="#101010"
                        buttonStyle={{ marginTop: 4 * vh }} />
                </View>
            </ScrollWrapper>

        </View>
    );
};
export default PurchaseOrderScreen;
