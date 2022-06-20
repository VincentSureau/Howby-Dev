import {View, Text, ScrollView, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {IMAGES} from '../../data/Images';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StickyItemFlatList from '@gorhom/sticky-item';
import Animated from 'react-native-reanimated';
import { Icon } from 'react-native-ui-lib';




const Slider = () => {

  return (
    <>
      <View style = {styles.container}>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style = {{paddingLeft: 10 }}
          >
            <View style = {styles.Card}>
                <Image source = {{uri: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} style = {styles.ImageStory} />
                <View style = {styles.ImageUser}>
                  <Icon source = {{uri: "https://img.icons8.com/ios/50/undefined/plus--v1.png"}} size = {30} tintColor = 'blue' />
                </View>
                <View style = {styles.CardFooter}>
                  <Text style = {styles.TextFooter}>Ajouter {"\n"} une {"\n"} story</Text>
                </View>
            </View>
            <View style = {styles.Card}>
              <Image source = {{uri: "https://images.unsplash.com/photo-1655649681470-55de5aee913d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}} style = {styles.ImageStory} />
              <Image source = {{uri: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"}} style = {styles.ImageUser} />
              <View style = {styles.CardFooter}>
                  <Text style = {styles.TextFooter}>Clémentine</Text>
                </View>
            </View>
            <View style = {styles.Card}>
              <Image source = {{uri: "https://images.unsplash.com/photo-1655649681470-55de5aee913d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}} style = {styles.ImageStory} />
              <Image source = {{uri: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"}} style = {styles.ImageUser} />
              <View style = {styles.CardFooter}>
                  <Text style = {styles.TextFooter}>Clémentine</Text>
                </View>
            </View>

            <View style = {styles.Card}>
              <Image source = {{uri: "https://images.unsplash.com/photo-1655705273978-3c5aae296870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"}} style = {styles.ImageStory} />
              <Image source = {{uri: "https://www.bedetheque.com/media/Photos/Photo_97.jpg"}} style = {styles.ImageUser} />
              <View style = {styles.CardFooter}>
                  <Text style = {styles.TextFooter}>Arthur</Text>
                </View>
            </View>

          </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create ({
  container : {
    width: '100%',
    height: 190,
    flexDirection: 'row',
    alignItems: 'center'
  },
  Card: {
    width: 100,
    height: 170,
    position: 'relative',
    marginRight: 8
  },
  ImageStory: {
    width: '100%',
    height: 170,
    borderRadius: 10
  },
  ImageUser: {
    position: 'absolute',
    top: 8,
    left: 9,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent:'center',
},

CardFooter:{
    width: '100%',
    position: "absolute",
    bottom: 10,
    left: 10

},

  TextFooter: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
     
}

})
export default Slider;
