import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const backgroundImage = {
  uri: 'https://images.unsplash.com/photo-1509804041229-d0e9abbf44ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFyYWNodXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
};

const HeaderSectionComponent = () => {
  return (
      <>
    <View style={styles.imageWrapper}>
      <ImageBackground style={styles.theImage} source={backgroundImage}>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>indispensable</Text>
          <Text style={styles.textForyou}>POUR VOUS</Text>
          <Text style={{color: 'white'}}>Parachute ascensionnel</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="menu-outline" size={30} style={{color: 'white'}} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    <View style = {styles.inlineButtons}>
        <TouchableOpacity>
        <Ionicons name="add-outline" size={20} style = {{ alignSelf: "center"}}/>
            <Text>Favoris</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{marginTop: 5}}>
            <Text style = {styles.suscribeBtn}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="chevron-forward-outline" size={20}  style = {{ alignSelf: "center"}}/>
        <Text>Partager</Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    height: 250,
    width: '100%',
    overflow: 'hidden',
  },
  theImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  textContent: {
    position: 'absolute',
    bottom: 30,
    left: 10,
  },
  textTitle: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 25,
  },
  textForyou: {
    color: 'orange',
    textTransform: 'uppercase',
  },

  inlineButtons:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      
      
  },
  suscribeBtn:{
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 25,
      paddingRight: 25,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20
  }
});

export default HeaderSectionComponent;
