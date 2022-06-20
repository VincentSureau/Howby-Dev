import { View, Text, ScrollView, Image, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { IMAGES } from '../../data/Images';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StickyItemFlatList from '@gorhom/sticky-item';
import Animated from 'react-native-reanimated';

// dummy data
const data = [...Array(20)]
  .fill(0)
  .map((_, index) => ({ id: `item-${index}` }));

// configs
const ITEM_WIDTH = 90;
const ITEM_HEIGHT = 150;
const STICKY_ITEM_WIDTH = 24;
const STICKY_ITEM_HEIGHT = 24;
const STICKY_ITEM_BACKGROUNDS = ['#222', '#000'];
const SEPARATOR_SIZE = 8;
const BORDER_RADIUS = 10;

const StickyItemView = ({
  x,
  threshold,
  itemWidth,
  itemHeight,
  stickyItemWidth,
  stickyItemHeight,
  separatorSize,
  isRTL,
}) => {

  const amazingAnimation = {
    // here you add your custom interactive animation
    // based on the animated value `x`
  }

  return <Animated.View style={amazingAnimation} />
}

const Slider = () => {
  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({ item, index}) => (
    <View
      key={`item-${index}`}
      style={{
        backgroundColor: 'red',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
      }}
    />
  )
  return (
    <StickyItemFlatList
      itemWidth={ITEM_WIDTH}
      itemHeight={ITEM_HEIGHT}
      separatorSize={SEPARATOR_SIZE}
      borderRadius={BORDER_RADIUS}
      stickyItemWidth={STICKY_ITEM_WIDTH}
      stickyItemHeight={STICKY_ITEM_HEIGHT}
      stickyItemBackgroundColors={STICKY_ITEM_BACKGROUNDS}
      stickyItemContent={StickyItemView}
      onStickyItemPress={handleStickyItemPress}
      data={data}
      renderItem={renderItem}
    />
  )
}


export default Slider