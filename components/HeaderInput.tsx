import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {theme} from '../theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Row from './Row';

const HeaderInput = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Row style={{alignItems: 'center'}}>
        <MaterialCommunityIcons
          name="magnify"
          color={theme['color-primary-500']}
          size={28}
        />
        <Text style={styles.text}>Find a location</Text>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: Platform.OS === 'ios' ? 50 : 30,
    borderWidth: 1,
    borderColor: theme['color-gray'],
    borderRadius: 30,
    padding: 10,
  },
  text: {
    marginLeft: 10,
  },
});

export default HeaderInput;
