import React, { useState, useEffect, useReducer } from 'react';
import {
    ScrollView,
    View,
    Keyboard,
    Image,
    Alert,
    Text,
    StatusBar,
    SafeAreaView
} from 'react-native';
import { colors, I18n } from '../../constants';
import { Button, Input, TextButton, AuthText, Spinner } from '../../components';
// Internet connection
import NetInfo from "@react-native-community/netinfo";
// Style
import styles from './style';
// Redux
import { useDispatch, useSelector } from "react-redux";
import { requestLogin } from '../../redux/actions/loginActions';
// Images
import Images from '../../utils/Images';

/**
 * @class Login
 * @param  {Object} navigation - Use for navigation
 */
const Login = ({ navigation }) => {

    /**
     * @description dispatch {object} - Dispatch Action
     */
    const dispatch = useDispatch();

    /**
     * Set user firstname value.
     * @description email {string} - Email for login user.
     * @description password {string} - Password for login user.
     * @description spinner {string} - Spinner for wait login user request.
     */
    const [email, setEmail] = useState('ugoswami@codal.com');
    const [password, setPassword] = useState('123456');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [spinner, setSpinner] = useState(false);


    const loginResponse = useSelector(state => state.loginReducer.loginResponse);
    // const spinnerResponse = useSelector(state => state.loginReducer.spinner);

    useEffect(() => {
        console.log('Final Login Resp : ' + JSON.stringify(loginResponse));
        setSpinner(false);
    }, [loginResponse]);

    /**
     * @function onLoginSubmit - Submit the user details
     */
    const onLoginSubmit = () => {
        // navigation.navigate('AppNavigator');
        // // Keyboard dismiss
        // Keyboard.dismiss();

        // Regex string for email validate
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email) && password !== '') {
            NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setSpinner(true);
                    // Dispatch login request
                    dispatch(requestLogin(email, password));
                } else {
                    Alert.alert('Error', I18n.t('connection.errorMessage'))
                }
            });
        } else {
            // Error Alert
            Alert.alert('BUYITEER', I18n.t('loginPage.invalidErrorMsg'));
        }
    }

    return (
        <SafeAreaView style={styles.safeView}>
            <StatusBar />
            {spinner ? <Spinner color={colors.blue} /> :
                <View style={styles.container}>
                    <View style={styles.topView}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={Images.headerLogo} style={styles.logoImage} />
                        </View>
                        <View>
                            <Input
                                placeholder={I18n.t('loginPage.emailInputPlaceholder')}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />
                            <Input
                                placeholder={I18n.t('loginPage.passwordInputPlaceholder')}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={e => setPassword(e)}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                buttonText={I18n.t('buttonText.loginUpButtonText')}
                                onPress={() => onLoginSubmit()}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TextButton
                                text={I18n.t('loginPage.forgotPasswordLabel')}
                                onPress={() => navigation.navigate('ForgetPassword')}
                            />
                        </View>
                    </View>



                    <View style={styles.bottomView}>
                        <TextButton
                            text={I18n.t('loginPage.createAccountLabel')}
                        />
                        <TextButton
                            text={I18n.t('loginPage.createAccountLabel1')}
                            onPress={() => navigation.navigate('SignUp')}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
};

export default Login;
