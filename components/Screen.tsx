import React from 'react';
import {StyleSheet, ViewStyle, StatusBar} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

const Screen = ({children, style}: {children: any; style?: ViewStyle}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {children}
      <StatusBar barStyle={'dark-content'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Screen;
