import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Button, Text} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {theme} from '../theme';
import {LISTMARGIN} from '../constants';
import {Property} from '../types/property';
import Row from './Row';
import ImageCarousel from './ImageCarousel';

const Card = ({property}: {property: Property}) => {
  return (
    <View style={{marginHorizontal: LISTMARGIN}}>
      <ImageCarousel images={property.images} />

      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderColor: '#d3d3d3',
          borderWidth: 1,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
        <Row style={{justifyContent: 'space-between'}}>
          <Text category={'s1'}>
            ${property.rentLow.toLocaleString()} -{' '}
            {property.rentHigh.toLocaleString()}
          </Text>
          <MaterialCommunityIcons
            name="heart-outline"
            color={theme['color-primary-500']}
            size={24}
          />
        </Row>
        <Text category={'c1'}>
          {property.bedroomLow} - {property.bedroomHigh} Beds
        </Text>
        <Text category={'c1'} style={{marginTop: 5}}>
          {property.name}
        </Text>
        <Text category={'c1'}>{property.street}</Text>
        <Text category={'c1'}>
          {property.city}, {property.state}, {property.zip}
        </Text>
        <Text category={'c1'} style={{marginTop: 5}}>
          {property.tags.join(', ')}
        </Text>
        <Row
          style={{
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Button
            appearance={'ghost'}
            onPress={() => {}}
            style={{borderColor: theme['color-primary-500'], width: '49%'}}>
            Email
          </Button>
          <Button onPress={() => {}} style={{width: '49%'}}>
            Call
          </Button>
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Card;
