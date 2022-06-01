import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'



const IMGURL = "https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg"

const ImageProfileComponent = () => {
  return (
    <View>
      <Image source = {{uri:IMGURL}} style={styles.img} />
    </View>
  )
}

export default ImageProfileComponent;


const styles = StyleSheet.create ({
  img: {
    width: "100%",
    height: 300
  }
})