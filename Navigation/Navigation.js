import React from 'react'
import { createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Components/Login'
import Profile from '../Components/Profile'

const LoginStackNavigator = createStackNavigator({
    Login: { // Vue Login
        screen: Login
    },
    Profile: { // Vue Profile
        screen: Profile
    }
})

export default createAppContainer(LoginStackNavigator)