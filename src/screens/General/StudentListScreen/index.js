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

            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Student Courses">




            </BackgroundBox>
            <ScrollWrapper avoidKeyboard={true}
            >
                <View style={{ alignItems: 'center' }}>
                    <FlatList data={data}
                        contentContainerStyle={{ alignItems: 'center' }}
                        ListFooterComponent={footer}
                        renderItem={({ item, index }) => {
                            return (
                                <StudentBox item={item}
                                    onPress={() => props.navigation.navigate("StudentDetailScreen")} />

                            )
                        }} />

                    

                </View>

            </ScrollWrapper>
        </View>

    );
};
export default StudentListScreen;
