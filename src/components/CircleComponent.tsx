import { StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from 'react-native-ui-lib'

const CircleComponent = () => {
  return (
    <View flex row style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity>
        <View style = {styles.circle_blue}>
            <Text>Famille</Text>
            <Text style = {{textAlign: "center"}}>12</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.circle_blue}>
            <Text style = {{textAlign: "center"}}>Amis proches</Text>
            <Text style = {{textAlign: "center"}}>4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.circle_blue}>
            <Text>Amis</Text>
            <Text style = {{textAlign: "center"}}>12</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style = {styles.circle_blue}>
            <Text>Collègues</Text>
            <Text style = {{textAlign: "center"}}>26</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    inlineContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
    },
  
    circle_blue:{
      width: 70,
      height: 70,    
      borderWidth: 7,
      borderRadius: 50,
      fontSize: 50,
      borderColor: "red",
      alignItems: 'center',
      justifyContent: 'center',
    },

});
export default CircleComponent