import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask
} from "react-native-svg";



const IMGURL = "https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg"

const ImageProfileComponent = () => {
  return (
    <View>
      <Svg>
        <Defs>
          <ClipPath id ="clip">

          </ClipPath>
        </Defs>
        <Image width = "150" height = "150" source = {{uri: IMGURL}}/>
      </Svg>
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