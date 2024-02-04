import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'

import colors from '../../constant/colors'
import { SolidButton, CustomInput, BoderButton } from '../../components'

import { useNavigation } from '@react-navigation/native'
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters'

const LoginCompany = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [errMsgs, setErrMsgs] = useState({});

    const handleError = (error, input) =>
        setErrMsgs((errMsgs) => ({ ...errMsgs, [input]: error }));


    const checkValidation = async () => {
        let isValid = true;
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            handleError("Email is Required.", "emailErrMessage");
            isValid = false;
        } else if (reg.test(email) == false) {
            handleError("Please enter a valid email.", "emailErrMessage");
            isValid = false;
        }
        if (!password) {
            handleError("Password is Requied.", "passErrMessage");
            isValid = false;
        }
        if (isValid) {
            alert("Valid Form")
        }
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Login</Text>
                <CustomInput
                    label="Email"
                    value={email}
                    placeHolder="ex. xyz@gmail.com"
                    error={errMsgs?.emailErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "emailErrMessage");
                        setEmail(text);
                    }}
                />
                <CustomInput
                    label="Password"
                    value={password}
                    placeHolder="******"
                    error={errMsgs?.passErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "passErrMessage");
                        setPassword(text);
                    }} />

                <Text
                    style={styles.infoText}
                    onPress={() => alert("Forgot Password")}
                >Forgot Password?</Text>
                <SolidButton label={"Login"} onPress={checkValidation} />
                <BoderButton label={"Create Account"} onPress={() => navigation.navigate("SingUpCompany")} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default LoginCompany

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scroll: {
        alignItems: 'center',
    },
    title: {
        fontWeight: '600',
        color: colors.black,
        fontSize: moderateScale(24),
        marginTop: moderateVerticalScale(100),
        marginBottom: moderateVerticalScale(30),
    },
    infoText: {
        fontWeight: '600',
        marginRight: '5%',
        color: colors.black,
        alignSelf: 'flex-end',
        fontSize: moderateScale(16),
        marginTop: moderateVerticalScale(10)
    }
})