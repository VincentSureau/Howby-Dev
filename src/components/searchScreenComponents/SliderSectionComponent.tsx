import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {IMAGES} from '../../data/Images';

const SliderSectionComponent = () => {
  return (
    <>
      <View style={{marginTop: 10}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            letterSpacing: 1,
          }}
        >
          Actualités & sorties du moment
        </Text>
      </View>
      <View>
        <ScrollView horizontal>
          {IMAGES.map((img, index) => (
            <View key={index}>
              <Image source={{uri: img.image}} style={styles.imgStyle} />
              <Text style={styles.sliderText}>{img.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  imgStyle: {
    width: 110,
    height: 110,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    position: 'relative',
  },
  sliderText: {
    fontSize: 15,
    fontWeight: '500',
    position: 'absolute',
    top: 10,
    left: 15,
    color: 'white',
    zIndex: 1000,
    resizeMode: 'contain',
  },
});
export default SliderSectionComponent;
