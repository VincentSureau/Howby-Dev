import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InvitationsComponent = () => {
  return (
    <>
      <View>
        <Text style={styles.invitationEtRappels}>Invitations et rappels</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
        <TouchableOpacity style={styles.invitations}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.invitationNumber}>3</Text>
            <Text style={styles.InvitationsText}>Invitation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptedInvitations}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.invitationNumber}>6</Text>
            <View>
              
              <Text style={styles.InvitationsText}>Invitations</Text>
              <Text style={styles.InvitationsText}>Acceptées</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  invitationEtRappels: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 20,
  },
  invitations: {
    backgroundColor: '#00699F',
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  invitationNumber: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 5,
    paddingLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 20,
    alignSelf: 'center',
  },
  acceptedInvitations: {
    backgroundColor: '#DCB56E',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 35,
    paddingLeft: 5,
  },
  InvitationsText: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 20,
    alignSelf: 'center',
  },
});
export default InvitationsComponent;
