import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';


const BackgroundBox = props => {
    return (
        <ImageBackground
            style={{
                height: 100 * vh, width: 100 * vw,
            }}
            resizeMode='cover'
            imageStyle={styles.scroll}
            source={allImages.generalImages.background}>

            <View style={{ alignItems: 'center' }}>
                <Image source={icons.logo}
                    style={styles.image} />
            </View>


            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 4 * vw, paddingBottom: 1 * vh
            }}>
                {props.backbutton?<TouchableOpacity style={styles.circle}
                onPress={props.onPress}>
                    <Image source={icons.backarrow}
                        style={{ width: 3 * vw, height: 3 * vw, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>:null}
                <View style={{ justifyContent: 'center', alignItems: 'center', width:props.backbutton? 80 * vw :90*vw}}>
                    {props.headerText ? <TextWrapper >{props.headerText}</TextWrapper> : null}

                </View>

            </View>


            <View style={styles.pinkBox} >
                <View style={styles.fieldContainer}>
                    {props?.bgColor ? <ImageBackground
                        style={{ flex: 1 }}
                        source={generalImages.bgColor}>
                        {props.children}

                    </ImageBackground> : props.children}
                </View>
            </View>

        </ImageBackground>
    );
};

export default BackgroundBox;
