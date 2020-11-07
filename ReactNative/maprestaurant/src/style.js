import {StyleSheet, Dimensions} from 'react-native';

export const searchBar = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    top: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 0,
    marginLeft: 5,
  },
});
