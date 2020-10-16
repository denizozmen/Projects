import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInputComponent,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const Worklist = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

export default Worklist;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 10,
    backgroundColor: '#546E7A',
    padding: 5,
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
});
