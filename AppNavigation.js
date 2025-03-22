import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Import Screens
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import FirebaseMessagingScreen from './screens/FirebaseMessagingScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Firebase" component={FirebaseMessagingScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
