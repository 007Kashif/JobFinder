import React from 'react'
import { Modal, StyleSheet, ActivityIndicator, View } from 'react-native'
import { Scale, moderateVerticalScale, scale } from 'react-native-size-matters'
import colors from '../constant/colors'

export const Loader = ({ loading }) => {
    return (
        <Modal transparent visible={loading} style={{ flex: 1 }}>
            <View style={styles.modal}>
                <View style={styles.centeredView}>
                    <ActivityIndicator size={'large'} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, .2)"
    },
    centeredView: {
        borderRadius: 10,
        width: scale(100),
        height: scale(100),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
    }
})