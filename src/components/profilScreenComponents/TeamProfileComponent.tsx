import {StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { useServices } from '../../services';

const TeamProfileComponent = () => {
  const {nav, t, api} = useServices();

  const goToTeamsSettings = () => {
    nav.push('Teams')
  }

  return (
    <View>
      <View style={styles.inlineContent}>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <Text>Memories</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons name="trophy-outline" size={20} />
          <Text> Trophées</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <Text>Historique</Text>
        </TouchableOpacity>
      </View>

      <View flex row style={{justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <View style = {styles.circle_blue}>
            <Text>Famille</Text>
            <Text style = {{textAlign: "center"}}>12</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <View style = {styles.circle_brown}>
            <Text >Amis Proche</Text>
            <Text style = {{textAlign: "center"}}>4</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <View style = {styles.circle_green}>
            <Text>Amis</Text>
            <Text style = {{textAlign: "center"}}>16</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToTeamsSettings}
        >
          <View style = {styles.circle_red} >
            <Text>Collègue</Text>
            <Text style = {{textAlign: "center"}}>26</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
