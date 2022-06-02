import {View, Text, Touchable, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TeamProfileComponent = () => {
  return (
    <>
      <View style={styles.inlineContent}>
        <TouchableOpacity>
          <Text>Memories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons name="trophy-outline" size={20} />
          <Text> Trophées</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Historique</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.inlineContent}>
        <TouchableOpacity style = {styles.circle_blue}>
          <Text>Famille</Text>
          <Text style = {{textAlign: "center"}}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.circle_brown}>
          <Text >Amis Proche</Text>
          <Text style = {{textAlign: "center"}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.circle_green}>
          <Text>Amis</Text>
          <Text style = {{textAlign: "center"}}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.circle_red} >
          <Text>Collègue</Text>
          <Text style = {{textAlign: "center"}}>26</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  inlineContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },

  circle_red:{
    width: 70,
    height: 70,    
    borderWidth: 7,
    borderRadius: 50,
    fontSize: 50,
    borderColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle_green:{
    width: 70,
    height: 70,
    borderWidth: 7,
    borderRadius: 50,
    borderColor: "green",
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle_brown:{
    width: 70,
    height: 70,
    borderWidth: 7,
    borderRadius: 50,
    fontSize: 50,
    borderColor: "brown",
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle_blue:{
    width: 70,
    height: 70,
    borderWidth: 7,
    borderRadius: 50,
    fontSize: 29,
    borderColor: "blue",
    alignItems: 'center',
    justifyContent: 'center'
  }

  
});

export default TeamProfileComponent;
