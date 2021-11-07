import { Alert } from 'react-native';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// common service URL
const SERVICEURL = 'https://backend.buyiteer.com.au:3000';

/**
* @function signUp signUp
* @param  email {string} - email for new create firebase user
* @param  password {string} - password for new create firebase user
*/
export const signUp = (email, password) => {

    const URL = SERVICEURL + '/merchant/' + 'signup';
    console.log('signUp URL : ' + URL);

    return new Promise(async (resolve, reject) => {
        const data = JSON.stringify({
            email: email,
            password: password
        });
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        console.log('Fina log : ' + URL, data, options);
        axios.post(URL, data, options)
            .then(async (response) => {
                console.log("signup Resp : ", JSON.stringify(response.data));
                resolve(response);
            })
            .catch((error) => {
                // handle error
                console.log('signup error : ', error);
                resolve(error);
            })

    });
}

/**
* @function LogIn LogIn
* @param  email {string} - email for login user
* @param  password {string} - password for login user
*/
export const LogIn = async (email, password) => {

    const URL = SERVICEURL + '/merchant/' + 'login';
    console.log('LogIn URL : ' + URL);

    return new Promise(async (resolve, reject) => {
        const data = JSON.stringify({
            email: email,
            password: password
        });
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        // console.log('Fina log : ' + URL, data, options);
        axios.post(URL, data, options)
            .then(async (response) => {
                // console.log("LogIn Resp : ", JSON.stringify(response.data));
                resolve(response);
            })
            .catch((error) => {
                // handle error
                console.log('LogIn error : ', error);
                resolve(error);
            })

    });
}
// authServerUrl: {
//     authority: 'https://backend.buyiteer.com.au:3000',
//     forgotPasswordPath: '/merchant/forgot-password',
//     resetPasswordPath: '/merchant/reset-password',
//     loginPath: '/merchant/login',
//     signUpPath: '/merchant/signup',
//     logoutPath: '/merchant/logout',
//     imageUploadPath: '/file/upload'
// }

// register(user: User) {
//     return request({
//         url: `${environment.authServerUrl.authority}${environment.authServerUrl.signUpPath}`,
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         content: JSON.stringify({
//             email: user.email,
//             password: user.password,
//         }),
//     });
// }

/**
* @function ForgotPassword forgotPassword
* @param  email {string} - email for forgot user password
*/
export const ForgotPassword = (email) => {
    const URL = SERVICEURL + '/merchant/' + 'forgot-password';
    console.log('forgotPassword URL : ' + URL);

    return new Promise(async (resolve, reject) => {
        const data = JSON.stringify({
            email: email
        });
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        console.log('Fina log : ' + URL, data, options);
        axios.post(URL, data, options)
            .then(async (response) => {
                console.log("forgotPassword Resp : ", JSON.stringify(response.data));
                resolve(response);
            })
            .catch((error) => {
                // handle error
                console.log('forgotPassword error : ', error);
                resolve(error);
            })

    });
}

/**
* @function resetPassword forgotPassword
* @param  email {string} - email for forgot user password
*/
export const resetPassword = (email) => {
    const URL = SERVICEURL + '/merchant/' + 'reset-password';
    console.log('resetPassword URL : ' + URL);

    return new Promise(async (resolve, reject) => {
        const data = JSON.stringify({
            email: email
        });
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        console.log('Fina log : ' + URL, data, options);
        axios.post(URL, data, options)
            .then(async (response) => {
                console.log("resetPassword Resp : ", JSON.stringify(response.data));
                resolve(response);
            })
            .catch((error) => {
                // handle error
                console.log('resetPassword error : ', error);
                resolve(error);
            })

    });
}

/**
* @function LogOut LogOut
* @param  email {string} - email for forgot user password
*/
export const LogOut = () => {
    const URL = SERVICEURL + '/merchant/' + 'logout';
    console.log('LogOut URL : ' + URL);

    return new Promise(async (resolve, reject) => {
        const data = JSON.stringify({
        });
        const options = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        console.log('Fina log : ' + URL, data, options);
        axios.post(URL, data, options)
            .then(async (response) => {
                console.log("LogOut Resp : ", JSON.stringify(response.data));
                resolve(response);
            })
            .catch((error) => {
                // handle error
                console.log('LogOut error : ', error);
                resolve(error);
            })

    });
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

