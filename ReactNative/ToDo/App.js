/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Worklist from './src/Worklist';

const list = (props) => {
  return(

  )
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.text}>TODO</Text>
        <Text style={styles.number}>0</Text>
      </View>

      <View style={styles.Worklist}>
        <Worklist title="Ev temizlenecek" />
      </View>

      <View style={styles.entry}>
        <TextInput style={styles.Input} />
        <TouchableOpacity style={styles.button} onPress={{}}>
          <Text style={styles.buttontext}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#37474F',
  },
  text: {
    color: '#ffc107',
    fontSize: 40,
    fontWeight: 'bold',
  },
  number: {
    color: '#ffc107',
    fontSize: 30,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  entry: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.18,
    backgroundColor: '#78909c',
    width: Dimensions.get('window').width * 0.95,
    marginBottom: 20,
    borderRadius: 20,
  },
  Input: {
    backgroundColor: '#f5f5f5',
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.85,
    marginVertical: 15,
    borderRadius: 10,
  },
  button: {
    width: Dimensions.get('window').width * 0.4,
    height: Dimensions.get('window').height * 0.06,
    alignItems: 'center',
    backgroundColor: '#455a64',
    padding: 10,
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    fontWeight: 'bold',
  },
  Worklist: {
    flex: 1,
  },
});

export default App;
