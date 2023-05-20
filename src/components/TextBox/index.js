import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../utils/theme';
import { vh } from '../../units';


const TextBox = props => {
    return (
        <View style={[styles.boxContainer,{borderColor:props.border}]}>
            <TextWrapper style={styles.buttontext}>{props.header}</TextWrapper>
            <TextWrapper style={[styles.buttontext, { color: theme.primary, fontSize: 3 * vh }]}>{props.count}</TextWrapper>

        </View>
    );
};

export default TextBox;
