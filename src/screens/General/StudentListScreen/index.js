import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import allImages, { generalImages, icons } from '../../../assets/images';
import BackgroundBox from '../../../components/BackgroundBox';
import theme from '../../../utils/theme';
import { vh, vw } from '../../../units';
import CommonButton from '../../../components/Button';
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
        <View>
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
                                <StudentBox item={item} 
                                onPress={()=>props.navigation.navigate("StudentDetailScreen")}/>

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
        </View>

    );
};
export default StudentListScreen;
