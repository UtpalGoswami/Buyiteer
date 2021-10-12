import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
// Style
import styles from './style';

/**
 * @class About
 * @param  {Object} navigation - Use for navigation
 */
export default About = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safeView}>

      <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>

        <View style={{ flex: 0.9, alignItems: 'center' }}>
          <Text style={styles.headerText}>About</Text>
        </View>
        <View style={{ flex: 0.1, marginEnd: 5 }}>
          <Entypo
            name="menu"
            size={25}
            color={colors.appCommonColor}
            onPress={() => {
              navigation.openDrawer();
            }} />
        </View>

      </View>

      <View style={styles.container}>
        <View style={styles.detailView}>
          <Text>Version : 1.0.0</Text>
        </View>
        <View style={styles.detailView}>
          <Text>To view privacy policy : </Text>
          <TouchableOpacity
            onPress={() => console.log('..View privacy policy..')}>
            <Text>click here </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailView}>
          <Text>To view terms and conditions : </Text>
          <TouchableOpacity
            onPress={() => console.log('..View terms and conditions..')}>
            <Text>click here </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView >
  )
}