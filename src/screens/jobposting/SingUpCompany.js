import React, { useState } from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native'

import colors from '../../constant/colors'
import { Loader, SolidButton, CustomInput, BoderButton } from '../../components'

import { useNavigation } from '@react-navigation/native'
import { moderateVerticalScale, moderateScale } from 'react-native-size-matters'

const SingUpCompany = () => {
    const navigation = useNavigation();

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [contact, setContact] = useState(null);
    const [company, setCompany] = useState(null);
    const [address, setAddress] = useState(null);
    const [password, setPassword] = useState(null);

    const [loading, setLoading] = useState(false)
    const [errMsgs, setErrMsgs] = useState({});

    const handleError = (error, input) =>
        setErrMsgs((errMsgs) => ({ ...errMsgs, [input]: error }))

    const checkValidation = async () => {
        let isValid = true;
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name) {
            handleError("Name is Required.", "nameErrMessage");
            isValid = false;
        }
        if (!email) {
            handleError("Email is Required.", "emailErrMessage");
            isValid = false;
        } else if (reg.test(email) == false) {
            handleError("Please enter a valid email.", "emailErrMessage");
            isValid = false;
        }
        if (!contact) {
            handleError("Contact number is required.", "phoneErrMessage");
            isValid = false;
        } else if (contact?.length < 7) {
            handleError("Contact lenght must be grater then 7.", "phoneErrMessage");
            isValid = false;
        }
        if (!company) {
            handleError("Company is required.", "companyErrMessage");
            isValid = false;
        }
        if (!address) {
            handleError("Address is required.", "addressErrMessage");
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
                <Text style={styles.title}>Create Account</Text>
                <CustomInput
                    label="Name"
                    value={name}
                    placeHolder="xyz"
                    error={errMsgs?.nameErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "nameErrMessage");
                        setName(text);
                    }}
                />
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
                    label="Contact"
                    value={contact}
                    placeHolder="03**12****"
                    error={errMsgs?.phoneErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "phoneErrMessage");
                        setContact(text);
                    }}
                />
                <CustomInput
                    value={company}
                    label="Company Name"
                    placeHolder="ex. google"
                    error={errMsgs?.companyErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "companyErrMessage");
                        setCompany(text);
                    }} />
                <CustomInput
                    label="Address"
                    value={address}
                    placeHolder="ex. lahore"
                    error={errMsgs?.addressErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "addressErrMessage");
                        setAddress(text);
                    }} />
                <CustomInput
                    label="Password"
                    value={password}
                    placeHolder="******"
                    error={errMsgs?.passErrMessage || null}
                    onChangeText={(text) => {
                        handleError(null, "passErrMessage");
                        setPassword(text);
                    }} />
                <SolidButton label={"Sign Up"} onPress={checkValidation} />
                <BoderButton label={"Login"} onPress={() => navigation.navigate("LoginCompany")} />
            </ScrollView>
            <Loader loading={loading} />
        </SafeAreaView>
    )
}

export default SingUpCompany

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
        marginBottom: moderateVerticalScale(10),
    },
})