import {HeaderTitle} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions,
} from 'react-native';

const ButtonList = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onGo()}
      style={{
        backgroundColor: '#e0e0e0',
        borderWidth: 0.2,
        borderColor: '#bdbdbd',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 25}}>{props.title.item.name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonList;
