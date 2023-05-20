import React from 'react';
import { Text, TouchableOpacity, View,  } from 'react-native';
import TextWrapper from '../TextWrapper';
import styles from './styles';
import { vh, vw } from '../../units';
import theme from '../../utils/theme';


const StudentBox = props => {

    return (
        <View style={styles.box}>
        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <TextWrapper style={styles.label}>Name: </TextWrapper>
                <TextWrapper style={styles.value}>{props?.item?.name}</TextWrapper>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextWrapper style={styles.label}>Course: </TextWrapper>
                <TextWrapper style={[styles.value, { color: theme.textOutline }]}>{props?.item?.course}</TextWrapper>

            </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,marginTop:2*vh}}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start'}}>
                <TextWrapper style={styles.label}>Email: </TextWrapper>
                <TextWrapper style={styles.value}>{props?.item?.email}</TextWrapper>

            </View>
            <TouchableOpacity style={styles.row}
            onPress={props.onPress}>

                <TextWrapper style={styles.viewDetails}>View Details</TextWrapper>


            </TouchableOpacity>
        </View>

    </View>
    );
};

export default StudentBox;
