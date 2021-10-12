import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword } from "../screens";

const Stack = createStackNavigator();

/**
 * Manage application authentication navigation
 * @class AuthNavigator
 */

export default AuthNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: null
        }}>
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
        />
        <Stack.Screen
            name="ForgetPassword"
            component={ForgotPassword}
        />
    </Stack.Navigator>
)