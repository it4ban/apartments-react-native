import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

const Row = ({
  children,
  style,
}: {
  children: any;
  style?: ViewStyle | ViewStyle[];
}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row;
