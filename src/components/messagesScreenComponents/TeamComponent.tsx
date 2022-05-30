import { View, Text} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const TeamComponent = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',margin: '1rem'}}>
      <Text style={{color: '#a56210', fontSize: 14, letterSpacing: 1, fontWeight: '500'}}> Teams</Text>
      <Ionicons name="chevron-forward-outline" size={30} />
    </View>
  )
}


export default TeamComponent