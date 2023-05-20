import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import allImages, { generalImages, icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import theme from '../../../utils/theme';


import TextBox from '../../../components/TextBox';
import fonts, { Fonts } from '../../../assets/fonts';
import CoursesBox from '../../../components/coursesBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import PdfContent from '../../../components/pdfContent';
import GeneralTextInput from '../../../components/TextInputs/GeneralTextInput';

const InviteStudentScreen = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Invite Students">

                <View style={{ alignItems: 'center' }}>
                    <GeneralTextInput
                        placeHolder="First Name*"

                    />
                    <GeneralTextInput
                        placeHolder="Last Name*"

                    />

                    <GeneralTextInput
                        placeHolder="Email Address*"

                    />
                    <CommonButton text="Invite Students"

                        buttonStyle={{ marginTop: 4 * vh }} />
                </View>


            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default InviteStudentScreen;
