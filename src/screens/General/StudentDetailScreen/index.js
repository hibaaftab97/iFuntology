import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';

const StudentDetailScreen = props => {

    return (
        <View style={{ flex: 1, }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Student Details">


            </BackgroundBox>
            <ScrollWrapper>
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

                    <CommonButton text="View Test"
                        onPress={() => props.navigation.navigate("ViewQuizScreen", {
                            coursename: props.route.params?.coursename,
                            type: "test",
                            viewdetails:'student'
                        })}
                        endColor="#060083"
                        colors
                        startColor="#2E38FF"
                    />
                    <CommonButton text="View Quiz"
                        onPress={() => props.navigation.navigate("ViewQuizScreen", {
                            coursename: props.route.params?.coursename,
                            viewdetails:'student',

                            type: "quiz"

                        })}
                        endColor="#060083"
                        colors
                        startColor="#2E38FF"
                    />


                    {/* <View style={{ alignItems: 'center',marginTop:2*vh }}>
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
</View> */}


                </View>
            </ScrollWrapper>
        </View>


    );
};
export default StudentDetailScreen;
