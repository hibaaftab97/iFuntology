import React from 'react';
import { Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';

const CoursesBox = props => {


    return (

        <TouchableOpacity onPress={props.onPress}
            style={{ marginLeft: 0 * vw, paddingHorizontal: 3 * vw, marginTop: 2 * vh }}>
            <ImageBackground
                style={{ width: 40 * vw, height: 20 * vh, alignItems: 'flex-end' }}
                imageStyle={{ borderRadius: 4 * vw, }}
                source={props?.item?.image}
            >

                <Image source={props.item.icon}
                    resizeMode='contain'
                    style={{ width: 8 * vw, height: 8 * vw, marginRight: 4 * vw }}

                />
                <TouchableOpacity   onPress={props.onSubscribe}
                style={{position: 'absolute',left:0,
               }}>
                    <Image source={icons.buysubscription}
                        resizeMode='contain'
                        style={{  width: 8 * vw, height: 8 * vw, marginRight: 4 * vw }}

                    />
                </TouchableOpacity>
            </ImageBackground>



            <LinearGradient
                style={styles.gradient}
                locations={[0, 0.4]}
                colors={['transparent', props.item.bg]}
                start={{ x: 0.5, y: 0.5 }}>
                <TextWrapper style={styles.text}>{props?.item?.coursename}</TextWrapper>
            </LinearGradient>

        </TouchableOpacity>

    );
};

export default CoursesBox;
