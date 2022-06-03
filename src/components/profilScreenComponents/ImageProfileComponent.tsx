import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Image, Text } from 'react-native-ui-lib'
import { LinearGradient } from 'expo-linear-gradient';

const img = {uri: "https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2022.2F01.2F06.2Fdc9e1cb3-9288-40dc-ab66-0947f59d9b42.2Ejpeg/1280x720/background-color/ffffff/quality/70/la-montagne-face-au-changement-climatique-ce-que-lon-sait-et-comment-on-sadapte.jpg"};

const ImageProfileComponent = () => {
  return (
    <View style={{height: 300}}>
        <Image 
          height={300}
          style={{height: 300}}
          source={img}
          customOverlayContent={
            <View style={styles.container}>
              <LinearGradient
                colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,1)' ]}
                start={{x: .2, y: 0}}
                end={{x: 1, y: 1}}
                locations={[0.5, 0.6, 1]}
                style={styles.linearGradient}
              >
                <Text>Julien</Text>
                <Text>Pizzo</Text>
              </LinearGradient>
            </View>
          }
        />
    </View>
  )
}

export default ImageProfileComponent;


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingRight: 20,
  },
  img: {
    width: "100%",
    height: 300
  }
})