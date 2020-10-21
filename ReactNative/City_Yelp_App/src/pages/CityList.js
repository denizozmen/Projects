import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Input from './Input';

const City = [
  'Allen',
  'Allendale',
  'Allentown',
  'Allison Park',
  'Allston',
  'Alma',
  'Almonte',
  'Almonte',
  'Alpharetta',
  'Alpine',
  'Alsip',
  'Altamonte Springs',
  'Atlanta',
  'Altemonte Springs',
  'Alton',
  'Alvore Obregon',
  'Ambler',
];

const ButtonList = (data) => {
  return (
    <TouchableOpacity>
      <Text style={{fontSize: 25}}>{data.item}</Text>
    </TouchableOpacity>
  );
};

const CityList = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 25, marginTop: 10, marginLeft: 15}}>
        Bir şehir seçiniz
      </Text>
      <Input />
      <FlatList data={City} renderItem={ButtonList} />
    </SafeAreaView>
  );
};

export default CityList;
