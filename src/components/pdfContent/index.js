import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import allImages, { generalImages, icons } from '../../assets/images';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';

const PdfContent = props => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={styles.pdfContainer}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={icons.pdf}
                    style={{ width: 8 * vw, height: 8 * vw, resizeMode: 'contain' }} />

                <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}>{props.pdfText}</TextWrapper>

                <Image source={icons.download}
                    style={{ width: 6 * vw, height: 6 * vw, resizeMode: 'contain' }} />

            </View>

        </TouchableOpacity>
    );
};

export default PdfContent;
