import {StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { useServices } from '../../services';
import TeamItem from '../team/team-item';

const teams = [
  {
    id: 1,
    color: 'blue',
    name: 'Famille',
    members: 12
  },
  {
    id: 2,
    color: 'brown',
    name: 'Amis Proche',
    members: 4
  },
  {
    id: 3,
    color: 'green',
    name: 'Amis',
    members: 16
  },
  {
    id: 4,
    color: 'red',
    name: 'Collègues',
    members: 26
  }
];

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
        { teams.map(team => <TeamItem key={team.id} team={team} onPress={goToTeamsSettings} /> )}
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
});

export default TeamProfileComponent;
