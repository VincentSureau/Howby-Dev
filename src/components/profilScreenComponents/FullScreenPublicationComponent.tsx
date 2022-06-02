import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

let imageHeight = Dimensions.get('window').height;
let imageWidth = Dimensions.get('window').width;

const FullScreenPublicationComponent = (props) => {
  return (
    <View>
      <ImageBackground source = {props.route.params.imageUrl} style = {{ height: imageHeight, width: imageWidth}} />
    </View>
  )
}

export default FullScreenPublicationComponent