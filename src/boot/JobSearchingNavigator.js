import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginCompany from '../screens/jobposting/LoginCompany'
import SingUpCompany from '../screens/jobposting/SingUpCompany'

const Stack = createStackNavigator()

const JobSearchingNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='SingUpCompany'>
            <Stack.Screen name='LoginCompany' component={LoginCompany} options={{ headerShown: false }} />
            <Stack.Screen name='SingUpCompany' component={SingUpCompany} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default JobSearchingNavigator

