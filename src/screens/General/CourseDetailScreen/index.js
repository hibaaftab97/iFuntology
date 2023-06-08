import React, { useState } from 'react';
import { View, } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import PdfContent from '../../../components/pdfContent';

const CourseDetailScreen = props => {

    const course = { ...props?.route?.params?.course };
    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText={course.coursename}>




            </BackgroundBox>

            <ScrollWrapper>
                <View style={{ paddingHorizontal: 8 * vw, }}>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 2 * vh, alignItems: 'center'
                    }}>
                        <TextWrapper style={styles.courseText}>Course Name:</TextWrapper>
                        <TextWrapper style={styles.courseName}> {course.coursename}</TextWrapper>
                    </View>
                    <TextWrapper style={[styles.courseText, { marginTop: 4 * vh }]}>Course Details:</TextWrapper>

                    <TextWrapper style={[styles.courseText, {
                        lineHeight: 2.5 * vh,
                        marginTop: 2 * vh,
                    }]}>{course.description}</TextWrapper>

                    <TextWrapper style={[styles.courseText, { marginTop: 2 * vh }]}>Course Content:</TextWrapper>

                    <PdfContent pdfText="Courses Instructions Details.pdf" />

                    <View style={{ marginTop: 2 * vh }}>
                        <CommonButton text="Invite Students"
                            colors
                            startColor="#C4A472"
                            onPress={() => props.navigation.navigate("InviteStudentScreen")}
                            endColor="#947037" />
                        <CommonButton text="View Students"
                            onPress={() => props.navigation.navigate("StudentListScreen")}

                        />
                        <CommonButton text="Create Quiz"
                            onPress={() => props.navigation.navigate("SelectChapterScreen", {
                                coursename: course.coursename
                            })}
                            endColor="#060083"
                            colors
                            startColor="#2E38FF"
                        />
                           <CommonButton text="View Quiz"
                            onPress={() => props.navigation.navigate("ViewQuizScreen", {
                                coursename: course.coursename
                            })}
                            endColor="#060083"
                            colors
                            startColor="#2E38FF"
                        />
                    </View>



                </View>
            </ScrollWrapper>
        </View>

    );
};
export default CourseDetailScreen;
