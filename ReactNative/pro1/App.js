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
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () =>  {
  return (
    <>
    <View>
      <Text style={{fontSize:30, fontWeight:"bold", marginTop:10, marginBottom:5}}> News </Text> 
    </View>

    <View style={{borderWidth:1, borderColor:'#DDD8D7', padding:10}}>
      <Text style={{fontSize:15,}}>41.838 bitcoin have been withdrawn from BitMEX since charges were announces </Text>
      <Text style={{fontSize:9}}>Cumulative bitcoin withdrawals from BitMEX from 1 Oct 17:00 UTC to 2 Oct 14:00 UTC</Text>
      <Image source={require ('./images/pic1.jpg')} style={{margin:10, width:380, height:140}} />
      <Text style={{fontWeight:"bold"}}>Bulls exit BitMEX Bitcoin Futures Market</Text>
      <Text style={{fontSize:10}}>Since the announcement from U.S. regulators, BitMEX has witnessed an outflow of more than 40,000 bitcoins, currently wort more than $422 million</Text>
    </View>

    <View style={{borderWidth:1, borderColor:'#DDD8D7', alignItems:"center",marginTop:5}}>
      <Image source={require('./images/pic2.jpg')}  style={{width:380, borderRadius:5}}/>
      <Text style={{fontSize:15, fontWeight:"bold",paddingTop:10,paddingBottom:5, paddingLeft:15, alignSelf:'flex-start'}}>Coinbase customers can now dodge a bank</Text>
      <Text style={{fontSize:10, paddingLeft:15}}>New update from Coinbase quickens the transmutation of crypto into fıat. Coinbase has unveiled a faster way for its custumors to move didital currencies out of crypto and into their bank accounts. </Text>
    </View>
      <View style={{ borderWidth:1, borderColor:'#DDD8D7',  marginTop:5}}>
        <Image source={require('./images/pic3.jpg')} style={{ width:380, marginTop:15,alignSelf:"center",borderRadius:5}} />    
      </View>
    </>
  );
};

export default App;


