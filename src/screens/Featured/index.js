import React, { useEffect, useState } from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  ToastAndroid,
  View,
  StatusBar
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// Style
import styles from './style';
// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors, commonStyles } from '../../constants';

/**
 * @class Featured
 * @param  {Object} navigation - Use for navigation
 */
export default Featured = ({ navigation }) => {
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [location, setLocation] = useState(null);
  const [text, onChangeText] = React.useState();

  useEffect(() => {
    getLocation();
  }, [])

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow Buyiteer to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => { } },
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  return (
    <SafeAreaView style={styles.safeView}>

      <View style={{ marginVertical: 18, flexDirection: 'row' }}>
        <View style={{ flex: 0.1, marginStart: 5 }}>
          <Entypo
            name="menu"
            size={25}
            color={colors.appCommonColor}
            onPress={() => {
              navigation.openDrawer();
            }} />
        </View>
        <View style={{ flex: 0.9, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Location')}
            style={styles.locationHeader}>
            <Entypo
              name="location-pin"
              size={25}
              color={colors.appCommonColor}
            />
            <Text style={styles.headerText}>Current Location</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.topView}>
        <TextInput
          style={styles.input}
          placeholder={'Search deals'}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.container}>

      </View>
    </SafeAreaView>
  );
}