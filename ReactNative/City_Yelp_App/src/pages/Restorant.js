import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const Restorant = (props) => {
  const selectedGoValue = props.route.params.goValue;
  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}}>
        {selectedGoValue.item.name} Restoranları
      </Text>
      <Image style={styles.picture} source={{uri: selectedGoValue.item.img}} />
      <Text style={{fontSize: 20, marginLeft: 20}}>
        {selectedGoValue.item.nameCafe}
      </Text>
    </View>
  );
};

export default Restorant;

const styles = StyleSheet.create({
  picture: {
    width: Dimensions.get('window').width * 0.98,
    height: Dimensions.get('window').height * 0.5,
    resizeMode: 'contain',
  },
});
