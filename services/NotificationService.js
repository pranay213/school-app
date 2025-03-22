import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
    useEffect(() => {
        const requestUserPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }
            return true;
        };

        const getFCMToken = async () => {
            const authStatus = await messaging().requestPermission();
            const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            if (enabled) {
                const token = await messaging().getToken();
                console.log("FCM Token:", token);
            }
        };

        const setupNotificationListeners = () => {
            messaging().onMessage(async remoteMessage => {
                console.log('Foreground Notification:', remoteMessage);
            });

            messaging().setBackgroundMessageHandler(async remoteMessage => {
                console.log('Background Notification:', remoteMessage);
            });
        };

        const initializeFCM = async () => {
            const hasPermission = await requestUserPermission();
            if (hasPermission) {
                await getFCMToken();
                setupNotificationListeners();
            }
        };

        initializeFCM();
    }, []);

    return null; // You can replace this with your actual UI components
};

export default App;
