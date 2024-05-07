import React from 'react';
import {View} from 'react-native';

import {Property} from '../types/property';

import ImageCarousel from './ImageCarousel';
import CardInformation from './CardInformation';

const Card = ({property}: {property: Property}) => {
  return (
    <View style={{marginVertical: 5}}>
      <ImageCarousel images={property.images} />
      <CardInformation property={property} />
    </View>
  );
};

export default Card;
