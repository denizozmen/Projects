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

//city Component
export const city = StyleSheet.create({
  container: {
    backgroundColor: '#FFD54F',
    padding: 5,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#424242',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
