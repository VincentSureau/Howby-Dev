import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileImage = {
  uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
};
const HeaderComponent = () => {
  return (
      <>
    <View style={styles.inlineHeader}>
      <View style={styles.inlineHeader}>
        <TouchableOpacity>
          <Ionicons name="search-circle" size={20}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>vu</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Howby</Text>
      </View>
      <View style={styles.inlineHeader}>
        <TouchableOpacity style = {{marginRight: 5}}>
          <Ionicons name="add" size={20}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight: 5}}>
          <Ionicons name="compass-outline" size = {20}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginRight: 5}}>
          <Image source={ProfileImage} style={styles.profilePic} />
        </TouchableOpacity>
      </View>
    </View>

    <View style = {styles.searchbar}>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  inlineHeader: {
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  profilePic: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  searchbar:{
      padding: 10
  }
});
export default HeaderComponent;
