import {StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image} from 'react-native-ui-lib';

const Img = {
    uri: 'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg',
  };

const PostSectionComponent = () => {
  return (
    <View style = {{marginTop: 20}}>
      <View style={styles.inline}>
        <Icon name="person-circle" size={30} />
        <Text style={{marginLeft: 10}}>Matthieu Blanc</Text>
      </View>
      <View>
        <Image source = {Img} style = {styles.postImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  postImage: {
    width: 400,
    height: 300,
    marginLeft: -10


  },
});
export default PostSectionComponent;
