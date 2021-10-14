import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { SplashScreen } from "../screens";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

/**
 * Manage application navigation flow, This function is called when application loads.
 * @class AppContainer
 */

export default AppContainer = () => {

  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (initializing) setInitializing(false);
    }, 2000);
  }, []);

  if (initializing) return <SplashScreen />;

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="AuthNavigator"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// {user ? <AppNavigator /> : <AuthNavigator />}