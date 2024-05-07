import React from 'react';
import {
  View,
  Animated,
  LayoutChangeEvent,
  TouchableOpacity,
  Platform,
  FlatList,
  StyleSheet,
} from 'react-native';

import {theme} from '../theme';
import {Button, Divider, Text} from '@ui-kitten/components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HEADERHEIGHT, LISTMARGIN} from '../constants';
import Row from './Row';
import HeaderInput from './HeaderInput';
import HeaderFilterButtons from './HeaderFilterButtons';
import HeaderLogistics from './HeaderLogistics';

const AnimatedListHeader = ({
  scrollAnimation,
}: {
  scrollAnimation: Animated.Value;
}) => {
  const offsetAnimaton = React.useRef(new Animated.Value(0)).current;
  const [clampedScroll, setClampedScroll] = React.useState(
    Animated.add(
      scrollAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      offsetAnimaton,
    ),
  );

  const navBarTranslate = clampedScroll.interpolate({
    inputRange: [0, HEADERHEIGHT],
    outputRange: [0, -HEADERHEIGHT],
    extrapolate: 'clamp',
  });

  const onLayoutChange = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setClampedScroll(
      Animated.diffClamp(
        Animated.add(
          scrollAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp',
          }),
          offsetAnimaton,
        ),
        0,
        height,
      ),
    );
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateY: navBarTranslate}],
        },
      ]}
      onLayout={onLayoutChange}>
      <View style={styles.defaultMargine}>
        <HeaderInput />
        <HeaderFilterButtons />
      </View>
      <Divider style={styles.devider} />
      <HeaderLogistics />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    height: HEADERHEIGHT - 30,
    backgroundColor: '#fff',
  },
  defaultMargine: {
    marginHorizontal: LISTMARGIN,
  },
  devider: {
    backgroundColor: theme['color-gray'],
  },
  button: {
    borderRadius: 30,
    borderColor: theme['color-gray'],
    marginHorizontal: 3,
  },
});

export default AnimatedListHeader;
