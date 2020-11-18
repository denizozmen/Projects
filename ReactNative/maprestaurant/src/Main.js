import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';

import {SearchBar, City, RestaurantDetail} from './components';

let originalList = [];

const Main = () => {
  //useStates
  const [citylist, setCityList] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setselectedRestaurant] = useState('');
  const [modalFlag, setModalFlag] = useState(false);

  //useEffects
  useEffect(() => {
    fetchData();
  }, []);

  //useRef
  const mapRef = useRef(null);

  //Functions
  const fetchData = async () => {
    const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
    setCityList(data.cities);
    originalList = [...data.cities];
  };

  const selectCity = async (city) => {
    const {
      data: {restaurants},
    } = await axios.get(
      'http://opentable.herokuapp.com/api/restaurants?city=' + city,
    );
    setRestaurants(restaurants);

    console.log(restaurants);

    const restaurantsCoordinates = restaurants.map((item, index) => {
      return {
        latitude: item.lat,
        longitude: item.lng,
      };
    });

    mapRef.current.fitToCoordinates(restaurantsCoordinates, {
      edgePadding: {top: 500, right: 100, bottom: 100, left: 100},
      animated: true,
    });
  };

  const renderItem = ({item}) => (
    <City
      data={item}
      onPress={() => {
        selectCity(item);
      }}
    />
  );

  const filterCity = (text) => {
    const filteredList = originalList.filter((item) => {
      const userText = text.toLowerCase();
      const cityName = item.toLowerCase();
      return cityName.indexOf(userText) > -1;
    });
    setCityList(filteredList);
  };

  const selectRestaurant = (restaurant) => {
    setselectedRestaurant(restaurant);
    setModalFlag(true);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {restaurants.map((item, index) => {
            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: item.lat,
                  longitude: item.lng,
                }}
                onPress={() => {
                  selectRestaurant(item);
                }}
              />
            );
          })}
        </MapView>
      </View>

      <View style={{position: 'absolute'}}>
        <SearchBar onChangeText={filterCity} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={citylist}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
        <RestaurantDetail
          isVisible={modalFlag}
          data={selectedRestaurant}
          close={() => setModalFlag(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
