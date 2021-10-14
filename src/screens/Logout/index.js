import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';

const Logout = ({ navigation }) => {

    useEffect(() => {
        navigation.navigate('AuthNavigator');
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Logout</Text>
        </View>
    );
};

export default Logout;
