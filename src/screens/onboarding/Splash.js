import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import colors from '../../constant/colors'
import { images } from '../../assets/images/images'

import { useNavigation } from '@react-navigation/native'
import { scale, moderateVerticalScale, verticalScale, moderateScale } from 'react-native-size-matters'

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("SelectUser")
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={images.Camera} />
            <Image style={styles.innerLogo} source={images.Circle} />
            <Text style={styles.name}>FindMyJob</Text>
            <Text style={styles.info}>Posts & Find Jobs in One Place</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    },
    logo: {
        width: scale(100),
        resizeMode: 'contain',
        height: verticalScale(100),
    },
    innerLogo: {
        width: scale(40),
        resizeMode: 'contain',
        height: verticalScale(40),
        marginTop: moderateVerticalScale(-70)
    },
    name: {
        fontWeight: '600',
        color: colors.black,
        fontSize: moderateScale(35),
        marginTop: moderateVerticalScale(30)
    },
    info: {
        fontWeight: '600',
        fontStyle: 'italic',
        position: 'absolute',
        fontSize: moderateScale(16),
        bottom: moderateVerticalScale(50)
    }
})