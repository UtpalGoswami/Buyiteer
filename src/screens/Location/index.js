import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import {colors} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {refreshLocation} from '../../redux/actions/dashboardActions';

// Import Autocomplete component
import Autocomplete from 'react-native-autocomplete-input';

/**
 * @class Location
 * @param  {Object} navigation - Use for navigation
 */
export default Location = ({navigation}) => {
  /**
   * @description dispatch {object} - Dispatch Action
   */
  const dispatch = useDispatch();

  const [spinner, setSpinner] = useState(false);
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [location, setLocation] = useState(null);
  const [postcode, setPostcode] = useState();


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
          {text: 'Go to Settings', onPress: openSetting},
          {text: "Don't Use Location", onPress: () => {}},
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
      position => {
        var setCoords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        console.log('setCoords : ' + JSON.stringify(setCoords));
        setLocation(setCoords);
        dispatch(refreshLocation(setCoords));
        navigation.navigate('Featured1');
        // console.log(position);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
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

  const SpecifyLocation = () => {};

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{marginVertical: 15, flexDirection: 'row'}}>
        <View style={{flex: 0.1, marginStart: 5}}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={colors.white}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={{flex: 0.9, alignItems: 'center'}}>
          <Text style={styles.headerText}>Location</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{margin: 20, flex: 1}}>
          <View style={styles.locationView}>
            <TouchableOpacity
              onPress={() => {
                getLocation();
              }}
              style={styles.locationHeader}>
              <Entypo name="location-pin" size={25} color={colors.white} />
              <Text style={styles.locationText}>Current Location</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <Text>OR</Text>
          </View>

          <View>
            <Text style={{fontSize: 15}}>Specify location</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                placeholder={'Enter suburb or postcode'}
                placeholderTextColor={colors.lightGrey}
                style={styles.inputContainer}
                value={postcode}
                onChangeText={e => {
                  setPostcode(e);
                }}
                autoCapitalize="none"
                onSubmitEditing={() => SpecifyLocation()}
              />
              <Entypo
                name="cross"
                size={30}
                color={colors.black}
                onPress={() => {
                  console.log('..Cross Press..');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
