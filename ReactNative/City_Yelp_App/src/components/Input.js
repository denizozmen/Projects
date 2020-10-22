import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import City from '../City.json';

const Input = () => {
  const [text, setText] = useState('');
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const filtred = City.filter((item) => {
      const textName = text.toUpperCase();
      const cityName = item.name.toUpperCase();
      return cityName.indexOf(textName) > -1;
    });
    setDisplay(filtred);
  }, [text]);

  return (
    <TextInput
      style={styles.textInput}
      placeholder={'Bir şehir arayın'}
      onChangeText={(value) => setText(value)}
    />
  );
};

export default Input;

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
