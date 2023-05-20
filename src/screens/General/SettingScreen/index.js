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
import StudentBox from '../../../components/StudentBox';
import CircleArrowBox from '../../../components/CircleArrowBox';

const SettingScreen = props => {

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox bgColor
                type="drawer"
                headerText="Settings">


                <View style={{ paddingHorizontal: 8 * vw }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>User Name: </TextWrapper>
                        <TextWrapper style={styles.value}>Celina Phillips</TextWrapper>

                    </View>

                    <View
                        style={styles.divider}
                    />

                    <TextWrapper style={[styles.label,{marginTop:2*vh}]}>Your Photo: </TextWrapper>


                    <View style={{ flexDirection: 'row',marginTop:2*vh }}>
                        <Image source={icons.profile}
                            style={{ width: 16 * vw, height: 16 * vw, resizeMode: 'contain' }} />
                        <View style={{ alignItems: 'center', justifyContent: 'space-evenly', marginLeft: 2 * vw }}>
                            <TouchableOpacity>
                                <Image source={icons.edit}
                                    style={{ width: 5 * vw, height: 5 * vw, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={icons.delete}
                                    style={{ width: 5 * vw, height: 5 * vw, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Mobile Number: </TextWrapper>
                        <TextWrapper style={styles.value}>+1 902-271-2910</TextWrapper>

                    </View>

                    <View
                        style={styles.divider}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Password: </TextWrapper>
                        <TextWrapper style={styles.value}>*******************</TextWrapper>

                    </View>
                    <View
                        style={styles.divider}
                    />


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Quiz Score: </TextWrapper>
                        <TextWrapper style={styles.value}>36</TextWrapper>

                    </View>
                    <View style={{ alignItems: 'center', marginTop: 2 * vh }}>
                        <CommonButton text="Edit Profile"
                            colors
                            startColor="#4C4C4C"
                            onPress={() => { props.navigation.navigate("EditProfile")}}
                            endColor="#101010" />
                        <CommonButton text="Set Password"
                            colors
                            startColor="#2E38FF"
                            onPress={() => { props.navigation.navigate("SetPasswordScreen")}}

                            endColor="#060083" />
                        
                    </View>


                </View>

            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default SettingScreen;
