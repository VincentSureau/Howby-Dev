import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { IMAGES } from "../../data/Images";

const SliderComponent = () => {
  return (
    <>
      <View>
        <Text
          style={{
            color: "#a56210",
            letterSpacing: 1,
            marginLeft: "1rem",
            marginTop: ".5rem",
            marginBottom: ".5rem",
          }}
        >
          Sorties et Groupes
        </Text>
      </View>
      <View>
        <ScrollView horizontal persitentScrollbar={true}>
          {IMAGES.map((img, index) => (
            <View key={index}>
              <Image source={{ uri: img.image }} style={styles.imgStyle} />
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
    position: "relative",
  },
  sliderText: {
    fontSize: 15,
    fontWeight: '500',
    position: "absolute",
    bottom: 0,
    right: 5,
    top: "70%",
    left: 5,
    textAlign: "center",
    backgroundColor: "#60605f",
    color: "white",
    borderRadius: 5,
    zIndex: 1000,
    resizeMode: 'contain'
  },
});

export default SliderComponent;
