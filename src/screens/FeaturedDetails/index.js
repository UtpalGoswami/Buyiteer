import React, {useEffect, useState} from 'react';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  Image,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Share,
} from 'react-native';
import {colors} from '../../constants';
import {DealItem, Spinner} from '../../components';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {getDeviceList} from '../../redux/actions/dashboardActions';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import Geolocation from 'react-native-geolocation-service';
import getDirections from 'react-native-google-maps-directions';
import {getDistance, getPreciseDistance} from 'geolib';

/**
 * @class FeaturedDetails
 * @param  {Object} navigation - Use for navigation
 */
export default FeaturedDetails = ({route, navigation}) => {
  /**
   * @description dispatch {object} - Dispatch Action
   */
  const dispatch = useDispatch();

  const {item} = route.params;

  const [spinner, setSpinner] = useState(false);
  const [details, setDetails] = useState({});
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [location, setLocation] = useState(null);
  const [isViewDeal, setIsViewDeal] = useState(true);
  const [displayCode, setDisplayCode] = useState(false);

  const dealsResponse = useSelector(state => state.dashboardReducer.dealsList);
  // const spinnerResponse = useSelector(state => state.dashboardReducer.spinner);

  useEffect(() => {
    setSpinner(true);
    setDetails(item);
    setSpinner(false);
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

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
        setLocation(position.coords);
        console.log('position : ' + JSON.stringify(position.coords));
      },
      error => {
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

  const calculatePreciseDistance = (storeLocation, userLocation) => {
    var pdis = getPreciseDistance(
      {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
      },
      {
        latitude: storeLocation.lat,
        longitude: storeLocation.lon,
      },
    );
    return (pdis / 1000).toFixed(2) + ' kms';
  };

  const handleGetDirections = storeLocation => {
    const data = {
      source: {
        latitude: location.latitude,
        longitude: location.longitude,
      },
      destination: {
        latitude: storeLocation.lat,
        longitude: storeLocation.lon,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
      // waypoints: [
      //   {
      //     latitude: -33.8600025,
      //     longitude: 18.697452
      //   },
      //   {
      //     latitude: -33.8600026,
      //     longitude: 18.697453
      //   },
      //   {
      //     latitude: -33.8600036,
      //     longitude: 18.697493
      //   }
      // ]
    };
    getDirections(data);
  };

  const dialCall = number => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${' + number + '}';
    } else {
      phoneNumber = 'telprompt:${' + number + '}';
    }
    Linking.openURL(phoneNumber);
  };

  const OpenURLButton = async ({url}) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Buyiteer',
        message:
          'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=123',
        url: 'https://play.google.com/store/apps/details?id=123',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={{marginVertical: 10, flexDirection: 'row'}}>
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
        <View style={{flex: 0.8, alignItems: 'center'}}>
          <Text style={styles.headerText}>Buyiteer</Text>
        </View>
        <View style={{flex: 0.1, marginEnd: 5}}>
          <Ionicons
            name="share-social"
            size={30}
            color={colors.white}
            onPress={() => {
              onShare();
            }}
          />
        </View>
      </View>

      {spinner || Object.keys(details).length === 0 || location == null ? (
        <Spinner color={colors.blue} />
      ) : (
        <View style={styles.container}>
          <View style={styles.imageView}>
            <ImageBackground
              style={styles.bgImage}
              source={{
                uri:
                  details.deal.image !== null
                    ? details.deal.image
                    : Images.defaultDeal,
              }}>
              <Image
                source={{uri: details.store.logo.url}}
                style={styles.logo}
              />
            </ImageBackground>
          </View>

          {isViewDeal ? (
            <View style={{flex: 0.5, justifyContent: 'space-between'}}>
              <View style={styles.details}>
                <Text style={styles.title1}>What you get</Text>
                <Text style={styles.title}>
                  {details.deal.definition.length > 100
                    ? details.deal.definition.slice(0, 100) + '...'
                    : details.deal.definition}
                </Text>

                <Text style={styles.title1}>More info</Text>
                <Text style={styles.validTime}>
                  Valid until{' '}
                  {moment(details.deal.duration.endDateTime).format(
                    'DD-MM-YYYY',
                  )}
                </Text>
                <Text style={styles.distance}>
                  Distance:{' '}
                  {calculatePreciseDistance(details.store.location, location)}
                </Text>
              </View>

              <View style={styles.BtmImagesView}>
                <TouchableOpacity
                  onPress={() => {
                    handleGetDirections(details.store.location);
                  }}>
                  <Image source={Images.direction} style={styles.logo} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dialCall(details.store.phone);
                  }}>
                  <Image source={Images.call} style={styles.logo} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    OpenURLButton(details.store.website);
                  }}>
                  <Image source={Images.www} style={styles.logo} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={{flex: 0.5, alignItems: 'center', marginTop: 35}}>
              <View>
                <Text
                  style={{color: colors.gray, fontWeight: '900', fontSize: 13}}>
                  Expire in
                </Text>
                <Text style={{color: colors.gray}}>Expire in time</Text>
              </View>

              {!displayCode ? (
                <TouchableOpacity
                  style={styles.SlideBtn}
                  onPress={() => {
                    setDisplayCode(true);
                    console.log('Display Code');
                  }}>
                  <Text style={styles.SlideBtnText}>
                    SLIDE LEFT TO DISPLAY CODE
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.ShowCodeView}>
                  <Text style={styles.ShowCodeBtnText}>
                    {details.deal.redemptionCode}
                  </Text>
                </View>
              )}
              <Text style={{color: colors.gray, marginTop: 10}}>
                Show / Enter this code at checkout
              </Text>
            </View>
          )}

          <View style={styles.BottomView}>
            <TouchableOpacity
              style={styles.InnerView}
              onPress={() => {
                setIsViewDeal(true);
                setDisplayCode(false);
                 console.log('View deal');
              }}>
              <Text style={styles.InnerText}>View deal</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.InnerView}
              onPress={() => {
                setIsViewDeal(false), console.log('Get it now !');
              }}>
              <Text style={styles.InnerText}>Get it now !</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
