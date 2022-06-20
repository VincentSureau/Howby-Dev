import {View, Text, ScrollView, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {IMAGES} from '../../data/Images';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StickyItemFlatList from '@gorhom/sticky-item';
import Animated from 'react-native-reanimated';
import { Icon } from 'react-native-ui-lib';


// dummy data
const data = [...Array(20)].fill(0).map((_, index) => ({id: `item-${index}`}));

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

    
  };

  return <Animated.View style={amazingAnimation} />;
};

const Slider = () => {
  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({item, index}) => (
    <View
      key={`item-${index}`}
      style={{
        backgroundColor: 'red',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
      }}
    />
  );
  return (
    <>
    <View>
          <Animated.View style = {[styles.personal_card_container,{
    
          }]}
          >
            <Animated.View style = {[styles.image_container,{

            }]}
            >
              <Image source = {{uri: "https://img.icons8.com/fluency/48/undefined/facebook-new.png"}}  style = {styles.image} />
            </Animated.View>
            <Animated.View style = {[styles.cta_container,{

            }]}
            >
              <Animated.Text style = {[styles.text,{

              }]}
              >
                Create {"\n"} story
              </Animated.Text>
              <Animated.View  style = {[styles.icon_contaier,]}
              >
                <Icon source ={{uri: "https://img.icons8.com/fluency/48/undefined/facebook-new.png"}} size= {18} color = {"#ffffff"}/>
              </Animated.View>
            </Animated.View>
          </Animated.View>
          
      </View>
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
      
    </>
  );
};

const styles = StyleSheet.create({
  personal_card_container: {
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  image_container:{
    position: 'relative',
    overflow: 'hidden'
  },

  image: {
    flex: 1,
    width: 0,
    height: 0,
  },

  cta_container: {
    position: 'relative',

  },

  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold'
  },
  icon_contaier: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#3578e5',
    position: 'absolute',
    borderWidth: 3,
    borderColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Slider;
