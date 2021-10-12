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
 * @class ForgotPassword
 * @param  {Object} navigation - Use for navigation
 */
const ForgotPassword = ({ navigation }) => {

    /**
     * Set user firstname value.
     * @description email {string} - Email for login user.
     * @description password {string} - Password for login user.
     * @description spinner {string} - Spinner for wait login user request.
     */
    // const [email, setEmail] = useState('ugoswami@codal.com');
    // const [password, setPassword] = useState('123456');
    const [email, setEmail] = useState('');
    const [spinner, setSpinner] = useState(false);

    /**
     * @function onForgotSubmit - email for forgot password
     */
    const onForgotSubmit = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setSpinner(true);
                    // Dispatch forgot password request
                    // dispatch(requestSignUp(email, password))
                } else {
                    Alert.alert('Error', I18n.t('connection.errorMessage'))
                }
            });
        } else {
            Alert.alert('Error', I18n.t('forgotPasswordPage.invalidErrorMsg'));
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
                            <Text style={styles.boldText}>{I18n.t('forgotPasswordPage.titleLabel')}</Text>
                        </View>
                        <View>
                            <Input
                                placeholder={I18n.t('forgotPasswordPage.emailInputPlaceholder')}
                                value={email}
                                onChangeText={e => setEmail(e)}
                            />
                        </View>
                        <View style={styles.btnView}>
                            <Button
                                buttonText={I18n.t('buttonText.forgotPasswordButtonText')}
                                onPress={() => onForgotSubmit()}
                            />
                        </View>
                    </View>



                    <View style={styles.bottomView}>
                        <TextButton
                            text={I18n.t('buttonText.headerBackButton')}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                </View>
            }
        </SafeAreaView>
    )
};

export default ForgotPassword;
