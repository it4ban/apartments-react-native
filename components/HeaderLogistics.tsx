import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';

import {LISTMARGIN} from '../constants';
import {theme} from '../theme';
import {Text} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Row from './Row';

const HeaderLogisticsButton = ({
  label,
  onPress,
  iconName,
  style,
}: {
  label: string;
  onPress: () => void;
  iconName?: string;
  style?: ViewStyle;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={styles.row}>
        {iconName ? (
          <MaterialCommunityIcons
            name={iconName}
            size={18}
            color={theme['color-info-300']}
          />
        ) : null}
        <Text
          category="c1"
          style={[
            styles.text,
            style,
            {
              marginLeft: 5,
            },
          ]}>
          {label}
        </Text>
      </Row>
    </TouchableOpacity>
  );
};
const HeaderLogistics = () => {
  return (
    <Row style={styles.container}>
      <Row>
        <MaterialCommunityIcons
          name="map-marker"
          size={18}
          color={theme['color-primary-500']}
        />
        <Text category="c1">12 Location Available</Text>
        <HeaderLogisticsButton
          label="Save"
          onPress={() => {}}
          style={{marginLeft: 10}}
        />
      </Row>
      <Row style={styles.rowContainer}>
        <HeaderLogisticsButton
          label="Sort"
          onPress={() => {}}
          iconName="sort"
        />
        <HeaderLogisticsButton
          label="Map"
          onPress={() => {}}
          iconName="map-outline"
        />
      </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: LISTMARGIN,
    marginVertical: 5,
  },
  text: {
    color: theme['color-info-200'],
    fontWeight: 'bold',
  },
  rowContainer: {
    gap: 20,
  },
  row: {
    alignItems: 'center',
  },
});

export default HeaderLogistics;
