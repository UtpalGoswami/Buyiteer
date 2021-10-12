import { Alert } from 'react-native';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// common service URL
const SERVICEURL = 'https://reqres.in/api/users?page=2';

/**
* @function signUp signUp
* @param  firstName {string} - firstName for new create firebase user
* @param  lastName {string} - lastName for new create firebase user
* @param  email {string} - email for new create firebase user
* @param  password {string} - password for new create firebase user
*/
export const signUp = (firstName, lastName, email, password) => {
    if (!firstName || !lastName || !email || !password) {
        Alert.alert('Error', 'Please add valid details');
        return null;
    }

}

/**
* @function signIn signIn
* @param  email {string} - email for login user
* @param  password {string} - password for login user
*/
export const signIn = async (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }
    return new Promise(async (resolve, reject) => {
        var status = 200;
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            resolve(json);
        } catch (error) {
            reject(error);
        }
    });

}

/**
* @function forgetPassword forgetPassword
* @param  email {string} - email for forgot user password
* @param  navigation {object} - navigation for screen navigate
*/
export const forgetPassword = (email, navigation) => {
    if (!email) {
        Alert.alert('Error', 'Please enter valid email')
    }
}


/**
* @function clearAsyncStorageData clear AsyncStorage Data
* @description clear all local async storage data
*/
const clearAsyncStorageData = async () => {
    try {
        await AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log('success'));
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

