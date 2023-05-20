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

const StudentListScreen = props => {

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
                headerText="Student Courses">


                <View style={{ alignItems: 'center' }}>
                    <FlatList data={data}
                        contentContainerStyle={{ alignItems: 'center' }}
                        ListFooterComponent={footer}
                        renderItem={({ item, index }) => {
                            return (
                                <StudentBox item={item} />

                            )
                        }} />

                    <CommonButton text="Create Test"
                        colors
                        startColor="#2E38FF"
                        onPress={() => {}}
                        endColor="#060083" />

                </View>

            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default StudentListScreen;
