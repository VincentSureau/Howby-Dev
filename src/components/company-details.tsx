import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';
import { useServices } from '../services';
import { Icon } from './icon';

type CompanyDetailsProps = {
  company: any;
};

export const CompanyDetails: React.FC<CompanyDetailsProps> = ({company}: CompanyDetailsProps) => {
  const {nav, t, api} = useServices();

  return (
    <View style={styles.container}>
      <View style={styles.inline}>
        <Icon name="person-circle" size={30} />
        <Text style={{ marginLeft: 10 }}>Prénom et nom</Text>
      </View>
      <View style={styles.inline}>
        <View>
          <Image
            source={{
              uri: company.featuredImage?.contentUrl || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&",
            }}
            style={styles.img}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.companyName}>{company.name}</Text>
          <Text>Prénom des utilisateurs présents</Text>
        </View>
      </View>

      <Text>Description du post effectué par l'utilisateur</Text>

      <View style={styles.icons}>
        <Pressable>
          <Icon name="heart-outline" size={30} />
        </Pressable>
        <Pressable>
          <Icon name="chatbox-outline" size={30} />
        </Pressable>
        <Pressable>
          <Icon name="caret-forward-outline" size={30} />
        </Pressable>
      </View>

      <View style={styles.inline}>
          <Icon name="person-circle" size={30} />
          <Text style={{marginLeft: 10}}>Prénom et nom</Text>
      </View>
      <View style={styles.post}>
          <Text>Post ayant le # de l'entreprise</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    margin: 10,
  },
  inline: {
    flexDirection: "row",
    alignItems: "center",
  },

  img: {
    width: 50,
    height: 50,
  },

  companyName: {
    fontWeight: "bold",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  post:{
    backgroundColor: 'gray',
    height: 300,
    textAlign:'center',
    justifyContent: 'center'
  }
})