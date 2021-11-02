import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from '../../components';
// Style
import styles from './style';

const Logout = ({ navigation }) => {

    const [spinner, setSpinner] = useState(true);

    useEffect(async () => {
        await AsyncStorage.setItem('EmailAddress', '');
        navigation.navigate('AuthNavigator');
        setSpinner(false);
    }, []);

    return (
        <SafeAreaView style={styles.safeView}>
            <StatusBar />
            {spinner ? <Spinner color={colors.blue} /> :
                <View style={styles.container}>
                    <Text>Logout</Text>
                </View>
            }
        </SafeAreaView>
    );
};

export default Logout;
