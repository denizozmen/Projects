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

import City from '../City.json';
import Restorant from './Restorant';

const CityList = (props) => {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  console.log(display);

  const ButtonList = (data) => {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('RestorantPage', {onRestorant: display})
        }
        style={{
          backgroundColor: '#e0e0e0',
          borderWidth: 0.2,
          borderColor: '#bdbdbd',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>{data.item.name}</Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setDisplay(City);
  }, []);

  useEffect(() => {
    const filtred = City.filter((item) => {
      const textName = text.toUpperCase();
      const cityName = item.name.toUpperCase();
      return cityName.indexOf(textName) > -1;
    });
    setDisplay(filtred);
  }, [text]);

  return (
    <SafeAreaView>
      <Text style={{fontSize: 25, marginTop: 10, marginLeft: 15}}>
        Bir şehir seçiniz
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Bir şehir arayın'}
        onChangeText={(value) => setText(value)}
      />
      <FlatList data={display} renderItem={ButtonList} />
    </SafeAreaView>
  );
};

export default CityList;

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    width: Dimensions.get('window').width * 0.94,
    alignSelf: 'center',
    marginVertical: 10,
    paddingLeft: 10,
  },
});
