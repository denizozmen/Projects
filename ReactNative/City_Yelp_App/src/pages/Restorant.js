import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const Restorant = (props) => {
  const RestorantName = props.route.params.onRestorant;
  return (
    <View>
      <Text>{RestorantName}</Text>
    </View>
  );
};

export default Restorant;
