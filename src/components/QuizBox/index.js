import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';
import GeneralTextInput from '../TextInputs/GeneralTextInput';
import { icons } from '../../assets/images';


const QuizBox = props => {

    

    return (
        <View style={styles.customStyle}>
            <View style={{ flexDirection: 'row', }}>
                <GeneralTextInput
                    label="Question"
                    placeHolder="Enter your question"
                    conStyle={{ width: 65 * vw }}
                    inputViewStyle={{ width: 65 * vw }}
                />
                <GeneralTextInput
                    label="Points"
                    placeHolder="point"
                    conStyle={{ width: 18 * vw }}
                    inputViewStyle={{ width: 18 * vw }}
                />
            </View>
            {Array.apply(0, new Array(4)).map((item, index) => {
                return (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity
                            onPress={()=>props.onChangeAnswer(index+1)}>
                            <View style={styles.outer}>
                               {props.item.answer===index+1?<View style={styles.inner}>

                                </View>:null}
                            </View>
                        </TouchableOpacity>

                            <TextWrapper style={styles.text}>Option {index+1}</TextWrapper>


                        <GeneralTextInput
                            placeHolder=""
                            multiline={true}
                            conStyle={{
                                width: 60 * vw, height: 8 * vh, marginLeft: 2 * vw,
                                borderColor: theme.black,
                            }}
                            inputViewStyle={{ width: 60 * vw }}
                        />

                    </View>
                );
            })}

            <View   style={{flexDirection:'row',
            marginTop:2*vh,
            justifyContent:'center',alignItems:'flex-start'}}>
                <View   style={{alignItems:'center',justifyContent:'center',
                    width:4*vw,height:4*vw,borderRadius:2*vw,backgroundColor:theme.blue}}>
                <Image  source={icons.tick}
                style={{width:2*vw,height:2*vw,}}
                resizeMode='contain'/>

                </View>
                <TextWrapper    style={styles.text}>Please select the correct answer of question from above</TextWrapper>
            </View>


        </View>
    );
};

export default QuizBox;
