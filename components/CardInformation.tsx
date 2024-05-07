import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

import {theme} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Property} from '../types/property';
import Row from './Row';

const CardInformation = ({property}: {property: Property}) => {
  return (
    <View style={styles.container}>
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
      <Text category={'c1'} style={styles.textMargin}>
        {property.name}
      </Text>
      <Text category={'c1'}>{property.street}</Text>
      <Text category={'c1'}>
        {property.city}, {property.state}, {property.zip}
      </Text>
      <Text category={'c1'} style={styles.textMargin}>
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
          style={[{borderColor: theme['color-primary-500']}, styles.button]}>
          Email
        </Button>
        <Button onPress={() => {}} style={styles.button}>
          Call
        </Button>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  textMargin: {
    marginTop: 5,
  },
  button: {
    width: '49%',
  },
});

export default CardInformation;
