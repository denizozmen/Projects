import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Myimport
import {city} from '../style';

const City = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={city.container}>
      <Icon name="bank" size={20} color="#424242" />
      <Text style={city.text}>{props.data}</Text>
    </TouchableOpacity>
  );
};

export {City};

const styles = StyleSheet.create({});
