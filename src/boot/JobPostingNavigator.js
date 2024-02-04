import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import LoginCompany from '../screens/jobposting/LoginCompany'
import SingUpCompany from '../screens/jobposting/SingUpCompany'

const Stack = createStackNavigator()

const JobPostingNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginCompany' component={LoginCompany} options={{ headerShown: false }} />
            <Stack.Screen name='SingUpCompany' component={SingUpCompany} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default JobPostingNavigator

