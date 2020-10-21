import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const Input = () => {
  const [text, setText] = useState('');

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
