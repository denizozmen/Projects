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
import ButtonList from '../components/ButtonList';

const CityList = (props) => {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  console.log(display);

  const renderButtonList = (data) => {
    return (
      <ButtonList
        title={data}
        onGo={() => props.navigation.navigate('RestorantPage', {goValue: data})}
      />
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
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={display}
        renderItem={renderButtonList}
      />
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
