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
        <TouchableOpacity>
          <Text>Famille</Text>
          <Text style = {{textAlign: "center"}}>12</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text >Amis Proche</Text>
          <Text style = {{textAlign: "center"}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Amis</Text>
          <Text style = {{textAlign: "center"}}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text>Collègues</Text>
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

  circle:{
    width: 50,
    height: 50,
    lineHeight: 50,
    borderRadius: "50",
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    
  }

  
});

export default TeamProfileComponent;
