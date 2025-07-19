
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
};

export default MyStack;
