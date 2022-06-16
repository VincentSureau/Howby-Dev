import { StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text } from 'react-native-ui-lib'
import TeamItem from './team/team-item'


const CircleComponent = ({}) => {

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
    },
    {
      id: 5,
      color: 'red',
      name: 'Conaissance',
      members: 12
    },
    {
      id: 6,
      color: 'Yellow',
      name: 'Clients',
      members: 4
    }
  ];

  return (
    <>
    <View row style = {{justifyContent: 'space-around', flexWrap: 'wrap', alignContent: "flex-start", marginLeft: 10, marginRight: 10, marginTop: 10}}>
      { teams.map(team => <TeamItem key={team.id} team={{...team, color: 'grey'}} />)}
    </View>

    </>
  )
}

export default CircleComponent