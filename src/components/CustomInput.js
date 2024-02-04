import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'

import colors from '../constant/colors'
import { scale, moderateVerticalScale, verticalScale, moderateScale } from 'react-native-size-matters'

export const CustomInput = (props) => {
    const { error, label, value, placeHolder, onChangeText } = props

    return (
        <View style={{ width: '90%' }}>
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    {...props}
                    value={value}
                    style={styles.input}
                    placeholder={placeHolder}
                    onChangeText={onChangeText}
                />
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: moderateScale(10),
        height: moderateVerticalScale(45),
        marginTop: moderateVerticalScale(10),
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: scale(10),
        fontSize: moderateScale(12),
        marginTop: moderateScale(-7),
        backgroundColor: colors.white,
        paddingHorizontal: moderateScale(8)
    },
    input: {
        height: verticalScale(30),
        fontSize: moderateScale(12),
        paddingLeft: moderateScale(10)
    },
    errorText: {
        color: colors.red,
        alignSelf: 'flex-end',
        fontSize: moderateScale(12),
        marginTop: moderateVerticalScale(5),
    },
})