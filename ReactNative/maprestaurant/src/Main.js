import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';

import {SearchBar} from './components';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <View style={{position: 'absolute'}}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
