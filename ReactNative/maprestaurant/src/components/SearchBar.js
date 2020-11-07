import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {searchBar} from '../style';

const SearchBar = () => {
  return (
    <View style={searchBar.container}>
      <Icon name="magnify" size={20} color="gray" />
      <TextInput
        placeholder="Searc a city..."
        onChangeText={(text) => props.onChangeText(text)}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({});
