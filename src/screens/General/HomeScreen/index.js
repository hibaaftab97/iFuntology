import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import allImages, { generalImages, icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import theme from '../../../utils/theme';


import TextBox from '../../../components/TextBox';
import { Fonts } from '../../../assets/fonts';
import CoursesBox from '../../../components/coursesBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';

const HomeScreen = props => {

    const data = [
        {
            coursename: "Funtology",
            bg: theme.primary,
            image: generalImages.funtology,
            description:"Funtology Fundamentals is a great course for students to start developing their skills and knowledge in cosmetology.  Funtology covers the basics of hair, makeup, and skincare, and includes interactive hands-on practice on mannequins to help students develop their technique."
        },
        {
            coursename: "Barbertology",
            bg: "#B79C3F",
            image: generalImages.barbertology,
            description:"Barbertology Fundamentals is a valuable addition to the iFuntology program, as it provide students with specialized knowledge and skills related to barbering. Students enrolled in Barbertology learn the fundamental topics of hair cutting, styling, shaving, and beard grooming."
        },
        {
            coursename: "Nailtology",
            bg: '#22C4B4',
            image: generalImages.nailtology,
            description:"Nailtology Fundamentals is a course dedicated to teaching students about nail structures, properties of healthy nails and design.  This is an important area of the cosmetology industry that requires a unique set of skills and knowledge.  Students learn about nail anatomy, different nail designs and techniques, and the best practices for nail care."
        },
        {
            coursename: "Skintology",
            bg: '#05E72A',
            image: generalImages.skintology,
            description:"Skintology Fundamentals is a course that introduces students to the world of skincare and makeup. Skintology offers basic facial massage, healthy skin practices, and makeup application techniques."
        }]

    const renderItem = ({ item, index }) => {

        return (
            <CoursesBox item={item} 
            onPress={()=> props.navigation.navigate("CourseDetailScreen",{
                course:item
            })}/>
        )
    }

    return (
        <ScrollWrapper avoidKeyboard={true}
            contentContainerStyle={styles.content}>
            <BackgroundBox bgColor>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TextBox header="Total Students"
                        border="#002373"
                        count="125" />
                    <TextBox header="Total Students"
                        border={theme.textOutline}

                        count="40" />
                </View >

                <TextWrapper    style={{color:theme.black,
                marginTop:2*vh,
                    textAlign:'center'}}>My Courses</TextWrapper>


                <FlatList data={data}
                
                    numColumns={2}
                    style={{}}
                    contentContainerStyle={{alignItems: 'center',
                    }}
                    keyExtractor={item => item}
                    renderItem={renderItem} />


            </BackgroundBox>


        </ScrollWrapper>


    );
};
export default HomeScreen;
