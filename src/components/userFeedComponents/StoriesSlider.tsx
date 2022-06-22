import {View, Text, ScrollView, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {IMAGES} from '../../data/Images';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import StickyItemFlatList from '@gorhom/sticky-item';
import Animated from 'react-native-reanimated';
import { Icon, TouchableOpacity } from 'react-native-ui-lib';
import { useServices } from '../../services';

const stories = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    user: {
      name: "Clémentine",
      img: "https://m.media-amazon.com/images/I/51Q0n2hJUiL._SX450_.jpg"
    }
  },
]


const AddStory = () => {
  const {nav} = useServices();
  return (
    <TouchableOpacity onPress={() => nav.goToTab('StoryNavigator')}>
      <View style={styles.Card}>
        <Image source={{uri: "https://images.unsplash.com/photo-1605406575497-015ab0d21b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}} style={styles.ImageStory} />
        <View style={styles.ImageUser}>
          <Icon source={{uri: "https://img.icons8.com/ios/50/undefined/plus--v1.png"}} size={30} tintColor='blue' />
        </View>
        <View style={styles.CardFooter}>
          <Text style={styles.TextFooter}>Ajouter {"\n"} une {"\n"} story</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const StorySlide = ({story}: {story: any}) => (
  <TouchableOpacity onPress={() => console.log('new story')}>
    <View style={styles.Card}>
      <Image source={{uri: story.img}} style={styles.ImageStory} />
      <Image source={{uri: story.user.img}} style={styles.ImageUser} />
      <View style={styles.CardFooter}>
          <Text style={styles.TextFooter}>{story.user.name}</Text>
        </View>
    </View>
  </TouchableOpacity>
)

const Slider = () => {

  return (
    <View style = {styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <AddStory />
          {stories.map(story => <StorySlide key={story.id} story={story} />)}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
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
