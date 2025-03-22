import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import FirebaseMessagingScreen from './screens/FirebaseMessagingScreen';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Hell" component={FirebaseMessagingScreen} />

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer >
    );
};

export default AppNavigation;
