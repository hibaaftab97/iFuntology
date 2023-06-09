import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import ScrollWrapper from '../../../components/ScrollWrapper';
import BackgroundBox from '../../../components/BackgroundBox';
import { vh, vw } from '../../../units';
import TextWrapper from '../../../components/TextWrapper';
import CommonButton from '../../../components/Button';
import EnterKits from '../../../components/Modal/EnterKits';
import { getChapter, getUnits } from '../../../utils';

const SelectChapterScreen = props => {

    const [visible, setVisible] = useState(false);
    const [chaptervisible, setChapterVisible] = useState(false);

    const [units, setUnits] = useState('Select Unit');
    const [chapter, setChapter] = useState('Select Chapter');



    useEffect(() => {
        handleModalVisibility();
    }, [units, chapter]);
    const handleModalVisibility = () => {
        setVisible(false);
        setChapterVisible(false);


    };


    return (
        <View style={{ flex: 1 }}>
            <BackgroundBox bgColor
                backbutton
                onPress={() => props.navigation.pop()}
                headerText="Select Chapter">


            </BackgroundBox>
            <ScrollWrapper>
                <EnterKits
                    onPress={handleModalVisibility}
                    onKitSelect={(unit) => {
                        setUnits(unit);
                    }
                    }
                    kits={getUnits()}
                    onHide={handleModalVisibility}
                    visibility={visible}
                />
                <EnterKits
                    onPress={() => setChapterVisible(false)}
                    onKitSelect={(unit) => {
                        setChapter(unit);
                    }
                    }
                    kits={getChapter()}
                    onHide={() => setChapterVisible(false)}
                    visibility={chaptervisible}
                />
                <View style={{ paddingHorizontal: 10 * vw }}>

                    <View style={styles.customStyle}>
                        <TextWrapper style={styles.value}>{props.route.params?.coursename}</TextWrapper>

                    </View>
                    <TouchableOpacity onPress={() => { setVisible(true) }}
                        style={styles.customStyle}>
                        <TextWrapper style={styles.value}>{units}</TextWrapper>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setChapterVisible(true) }}
                        style={styles.customStyle}>
                        <TextWrapper style={styles.value}>{chapter}</TextWrapper>

                    </TouchableOpacity>

                </View>
                <View style={{ alignItems: 'center', marginTop: 2 * vh, }}>
                    <CommonButton text="Next"
                        onPress={() => {
                            if(props.route.params?.type=='quiz'){
                                props.navigation.navigate("CreateQuizScreen")

                            }
                            else{
                            props.navigation.navigate("CreateTestScreen")

                            }
                         }}
                        colors
                        startColor="#C4A472"
                        endColor="#947037" />

                </View>
            </ScrollWrapper>

        </View>

    );
};
export default SelectChapterScreen;
