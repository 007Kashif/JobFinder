import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import colors from '../constant/colors'
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters'


export const BoderButton = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.btnText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.cBlack,
        borderRadius: moderateScale(10),
        height: moderateVerticalScale(45),
        marginTop: moderateVerticalScale(20),
    },
    btnText: {
        fontWeight: '500',
        color: colors.cBlack,
        fontSize: moderateScale(16),
    },
})