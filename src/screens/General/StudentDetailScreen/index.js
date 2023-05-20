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

const StudentDetailScreen = props => {

    const data = [{
        name: "Chrisitian Marker",
        email: "christiamarker@gmail.com",
        course: "Barbertology"
    },
    {
        name: "Chrisitian Marker",
        email: "christiamarker@gmail.com",
        course: "Barbertology"
    },]

    const footer = () => {
        return (
            <View style={{
                width: 60 * vw,
                marginTop: 4 * vh,
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
            }}>
                <CircleArrowBox color="#C6C6C6"
                    image={icons.backarrow} />
                <CircleArrowBox color={theme.textOutline}
                    image={icons.forwardArrow} />


            </View>
        )
    }
    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Student Details">


                <View style={{ paddingHorizontal: 8 * vw }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>First Name: </TextWrapper>
                        <TextWrapper style={styles.value}>Smith</TextWrapper>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Last Name: </TextWrapper>
                        <TextWrapper style={styles.value}>Michelle</TextWrapper>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Mobile Number: </TextWrapper>
                        <TextWrapper style={styles.value}>+1 902-271-2910</TextWrapper>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Email Address: </TextWrapper>
                        <TextWrapper style={styles.value}>smithmichelle@gmail.com</TextWrapper>

                    </View>

                    <View
                        style={{
                            borderBottomColor: '#474747',
                            marginTop: 4 * vh,
                            borderBottomWidth: 0.1 * vh,
                        }}
                    />

                    <TextWrapper style={styles.coursedetail}>Courses Details</TextWrapper>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Quiz Name: </TextWrapper>
                        <TextWrapper style={styles.value}>Quiz No 1</TextWrapper>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 * vh }}>
                        <TextWrapper style={styles.label}>Quiz Score: </TextWrapper>
                        <TextWrapper style={styles.value}>36</TextWrapper>

                    </View>
                    <View style={{ alignItems: 'center',marginTop:2*vh }}>
                        <CommonButton text="View Story"
                            colors
                            startColor="#4C4C4C"
                            onPress={() => { }}
                            endColor="#101010" />
                        <CommonButton text="Add Comment"
                            colors
                            startColor="#2E38FF"
                            onPress={() => { }}
                            endColor="#060083" />
                    </View>


                </View>

            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default StudentDetailScreen;
