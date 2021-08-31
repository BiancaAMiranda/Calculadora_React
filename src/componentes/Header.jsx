import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import {styles} from '../styles/style'

export default function Header(){
    return(
        <View style={styles.head}>
            <Text style={styles.headtitle}>Calcutalor Inator</Text>
        </View>
    )
}