import React from 'react';
import {FlatList, Image, Pressable, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {WIDTH} from '../constants';

const ImageCarousel = ({images}: {images: string[]}) => {
  const viewConfig = {
    viewAreaCoveragePercentThreshold: 95,
  };
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const flatListRef = React.useRef<FlatList | null>(null);
  const viewRef = React.useRef(({changed}: {changed: any}) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  const handlePressRigth = () => {
    if (activeIndex === images.length - 1) {
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: 0,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex + 1,
    });
  };

  const handlePressLeft = () => {
    if (activeIndex === 0) {
      return flatListRef.current?.scrollToIndex({
        animated: false,
        index: images.length - 1,
      });
    }

    flatListRef.current?.scrollToIndex({
      index: activeIndex - 1,
    });
  };
  return (
    <>
      <FlatList
        data={images}
        ref={flatListRef}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewRef.current}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
        keyExtractor={item => item}
      />

      <Pressable
        onPress={() => handlePressLeft()}
        style={[styles.chevronBtn, {left: 5}]}>
        <MaterialCommunityIcons name="chevron-left" color="#fff" size={45} />
      </Pressable>
      <Pressable
        onPress={() => handlePressRigth()}
        style={[styles.chevronBtn, {right: 5}]}>
        <MaterialCommunityIcons name="chevron-right" color="#fff" size={45} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 225,
    width: WIDTH,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  chevronBtn: {
    position: 'absolute',
    top: 95,
  },
});

export default ImageCarousel;
