import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../theme';
import {Button} from '@ui-kitten/components';

const HeaderFilterButtons = () => {
  const filterButtons = [
    {
      iconName: 'filter-variant',
      onPress: () => {},
    },
    {
      label: 'Price',
      onPress: () => {},
    },
    {
      label: 'Beds & Baths',
      onPress: () => {},
    },
    {
      label: 'Move-in Data',
      onPress: () => {},
    },
    {
      label: 'Pets',
      onPress: () => {},
    },
  ];

  return (
    <View>
      <FlatList
        style={{marginVertical: 10}}
        data={filterButtons}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          if (item.iconName) {
            return (
              <Button
                appearance="ghost"
                style={[styles.button, {width: 48}]}
                onPress={item.onPress}
                accessoryLeft={
                  <MaterialCommunityIcons
                    name={item.iconName as any}
                    size={20}
                    color={theme['color-primary-500']}
                  />
                }
              />
            );
          }
          return (
            <Button appearance="ghost" style={styles.button}>
              {item.label}
            </Button>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    borderColor: theme['color-gray'],
    marginHorizontal: 3,
  },
});

export default HeaderFilterButtons;
