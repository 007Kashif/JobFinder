import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import colors from '../../constant/colors'
import { images } from '../../assets/images/images'

import { useNavigation } from '@react-navigation/native'
import { scale, moderateVerticalScale, verticalScale, moderateScale } from 'react-native-size-matters'

const SelectUser = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={images.Camera} />
            <Image style={styles.innerLogo} source={images.Circle} />
            <Text style={styles.title}>What are you looking for?</Text>
            <TouchableOpacity style={styles.bgBtn} onPress={() => navigation.navigate("JobPostingNavigator")}>
                <Text style={styles.btnText}>Want to Hire Candidate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText1}>Want to Get Job</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    logo: {
        width: scale(90),
        resizeMode: 'contain',
        height: verticalScale(90),
    },
    innerLogo: {
        width: scale(35),
        resizeMode: 'contain',
        height: verticalScale(35),
        marginTop: moderateVerticalScale(-65)
    },
    title: {
        fontWeight: '600',
        color: colors.black,
        fontSize: moderateScale(18),
        marginTop: moderateVerticalScale(100)
    },
    bgBtn: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.cBlack,
        borderRadius: moderateScale(10),
        height: moderateVerticalScale(50),
        marginTop: moderateVerticalScale(20),
    },
    button: {
        width: '90%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.cBlack,
        borderRadius: moderateScale(10),
        height: moderateVerticalScale(50),
        marginTop: moderateVerticalScale(20),
    },
    btnText: {
        fontWeight: '500',
        color: colors.white,
        fontSize: moderateScale(16),
    },
    btnText1: {
        fontWeight: '500',
        color: colors.cBlack,
        fontSize: moderateScale(16),
    },
})