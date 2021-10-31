import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ navigation }) => {

    useEffect(async () => {
        await AsyncStorage.setItem('EmailAddress', '');
        navigation.navigate('AuthNavigator');
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Logout</Text>
        </View>
    );
};

export default Logout;
