import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';

export type TeamType = {
  id: number;
  name: string;
  color?: string;
  members: number;
}

interface TeamItemProps {
  team: TeamType;
  onPress?: () => {};
}

const TeamItem: React.FC<TeamItemProps> = ({team, onPress}: TeamItemProps) => {

  const Container = ({children}: {children: any}) => onPress ? (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  ) : (<React.Fragment>{children}</React.Fragment>);

  return (
    <Container>
        <View style={StyleSheet.flatten([styles.circle, {borderColor: team.color || 'blue', ...styles.circle}])}>
            <Text style={styles.text}>{team.name}</Text>
            <Text style={styles.text}>{team.members}</Text>
        </View>
    </Container>
  );
};

export default TeamItem;

const styles = StyleSheet.create({
    circle:{
        width: 70,
        height: 70,    
        borderWidth: 7,
        borderRadius: 50,
        fontSize: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    }
});