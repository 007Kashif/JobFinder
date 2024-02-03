import React from 'react'
import { StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import JobPostingNavigator from './JobPostingNavigator'
import JobSearchingNavigator from './JobSearchingNavigator'

import Splash from '../screens/onboarding/Splash'
import SelectUser from '../screens/onboarding/SelectUser'

const Stack = createStackNavigator()
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='SelectUser' component={SelectUser} options={{ headerShown: false }} />
                <Stack.Screen name='JobPostingNavigator' component={JobPostingNavigator} options={{ headerShown: false }} />
                <Stack.Screen name='JobSearchingNavigator' component={JobSearchingNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({

})