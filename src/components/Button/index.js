import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';


const CommonButton = props => {
    return (
        <TouchableOpacity   onPress={props.onPress}>
        <LinearGradient
            style={[styles.buttonContainer,props.buttonStyle]}
            colors={
                props?.colors? [props?.startColor,props?.endColor]:
                [
                    '#FF6BE7',

                    '#B20095']
            }>

            <TextWrapper style={styles.buttontext}>{props.text}</TextWrapper>

        </LinearGradient>
        </TouchableOpacity>
    );
};

export default CommonButton;
