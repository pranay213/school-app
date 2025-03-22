import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const FirebaseMessagingScreen = () => {
    const navigation = useNavigation();

    // Redirect to Home after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home'); // Replace so the user can't go back
        }, 3000);

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    return (
        <View>
            <Text>FirebaseMessagingScreen</Text>
            <Button title="Go to Home Now" onPress={() => navigation.replace('Home')} />
        </View>
    );
};

export default FirebaseMessagingScreen;
