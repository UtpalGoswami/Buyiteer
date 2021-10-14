import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';

/**
 * @class SplashScreen
 * @param  {Object} navigation - Use for navigation
 */
export default SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <Image source={Images.splashLogo} style={styles.splashLogo} />
            </View>
        </SafeAreaView>

    )
}