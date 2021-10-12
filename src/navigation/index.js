import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { SplashScreen } from "../screens";

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
      <AppNavigator />
    </NavigationContainer>
  )
}

// {user ? <AppNavigator /> : <AuthNavigator />}