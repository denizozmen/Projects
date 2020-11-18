import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {restaurantDetail} from '../style';

const RestaurantDetail = (props) => {
  const showPrice = (length) => {
    const priceLabel = [];
    for (let i = 0; i < length; i++) {
      priceLabel.push(<Icon key={i} name="star" size={20} color="#33691e" />);
    }
    return priceLabel;
  };

  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.close}
      swipeDirection="down"
      onSwipeComplete={props.close}>
      <View style={restaurantDetail.container}>
        <View style={restaurantDetail.line} />
        <View style={restaurantDetail.line} />
        <Text style={restaurantDetail.name}>{props.data.name}</Text>
        <Text style={restaurantDetail.address}>
          {props.data.area} {props.data.address}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="phone" size={20} />
          <Text style={restaurantDetail.phone}>+{props.data.phone}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          {showPrice(props.data.price)}
        </View>
        <Text>{props.data.description}</Text>
      </View>
    </Modal>
  );
};

export {RestaurantDetail};
