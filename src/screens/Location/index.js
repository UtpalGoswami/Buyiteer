import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import { colors } from '../../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * @class Location
 * @param  {Object} navigation - Use for navigation
 */
export default Location = ({ navigation }) => {

    const [postcode, setPostcode] = useState();

    return (
        <SafeAreaView style={styles.safeView}>

            <View style={{ marginVertical: 15, flexDirection: 'row' }}>
                <View style={{ flex: 0.1, marginStart: 5 }}>
                    <Ionicons
                        name="arrow-back"
                        size={30}
                        color={colors.white}
                        onPress={() => {
                            navigation.goBack();
                        }} />
                </View>
                <View style={{ flex: 0.9, alignItems: 'center' }}>
                    <Text style={styles.headerText}>Location</Text>
                </View>
            </View>

            <View style={styles.container}>

                <View style={{ margin: 20, flex: 1 }}>
                    <View style={styles.locationView}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('..Get location..');
                            }}
                            style={styles.locationHeader}>
                            <Entypo
                                name="location-pin"
                                size={25}
                                color={colors.white}
                            />
                            <Text style={styles.locationText}>Current Location</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>
                        <Text>OR</Text>
                    </View>

                    <View>
                        <Text style={{ fontSize: 15 }}>Specify location</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                placeholder={'Enter suburb or postcode'}
                                placeholderTextColor={colors.lightGrey}
                                style={styles.inputContainer}
                                value={postcode}
                                onChangeText={(e) => { setPostcode(e) }}
                                autoCapitalize='none'
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

    )
}