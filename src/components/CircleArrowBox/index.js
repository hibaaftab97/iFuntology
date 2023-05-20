import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';


const CircleArrowBox = props => {

    return (
        <TouchableOpacity style={[styles.circle,{backgroundColor:props.color}]}
                onPress={props.onPress}>
                    <Image source={props?.image}
                        style={{ width: 6 * vw, height: 6 * vw, resizeMode: 'contain' }}
                    />
                </TouchableOpacity>
    );
};

export default CircleArrowBox;
