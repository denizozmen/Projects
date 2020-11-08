import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

import {SearchBar, City} from './components';

const Main = () => {
  //useStates
  const [citylist, setCityList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  //useEffects
  useEffect(() => {
    fetchData();
  }, []);

  //Functions
  const fetchData = async () => {
    const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
    setCityList(data.cities);
  };

  const selectCity = async (city) => {
    const {
      data: {restaurants},
    } = await axios.get(
      'http://opentable.herokuapp.com/api/restaurants?city=' + city,
    );
    setRestaurants(restaurants);
  };

  const renderItem = ({item}) => (
    <City
      data={item}
      onPress={(item) => {
        selecCity(item);
      }}
    />
  );

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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={citylist}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({});
