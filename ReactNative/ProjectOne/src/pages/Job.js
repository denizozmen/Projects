import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const Job = (props) => {
  const {selectedLanguage} = props.route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>JOBS</Text>
        <Text>{selectedLanguage}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Job};
