import {View, Text, StyleSheet, } from 'react-native';
import React from 'react';
import { Image } from 'react-native-ui-lib';



const Logo ={uri: 'https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg'};

const BottomSectionComponent = () => {
  return (
    <>
    <View style = {styles.bottomSection}>
      <View>
      <Image source ={Logo} style={{width: 50, height: 50}} />
      </View>
      <View>
        <Text style = {styles.companyName} >MOUNTAINN Fly Adventure</Text>
        <Text style = {styles.username}>Thierry et Sébastien</Text>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create ({
  bottomSection: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  logo:{
    width: 40,
    height: 40
  },
  companyName:{
    marginLeft: 10,
    color: "#000",
    fontWeight: "bold"
  },
  username:{
    marginLeft: 10,
    color: "brown",
    fontWeight: "bold"
  }
})
export default BottomSectionComponent;
