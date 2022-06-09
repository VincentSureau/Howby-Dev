import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-ui-lib';

const cardImage = {
  uri: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
};



const FollowersComponent = () => {
  
  return (
    <>
      <View>
        <Text style={styles.mentionneText}>Mentionné</Text>
        <Text style={styles.dateText}>Aujourd'hui</Text>
      </View>
      <View>
        <View style={styles.abonnement}>
          <TouchableOpacity style={styles.inline}>
            <Icon name="person-circle" size={30} />
            <Text style={styles.username}>Prénom Nom</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white'}}>S'abonner</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.messageText}>A commencé à vous suivre. abonnez-vous en retour?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.inline}>
            <Icon name="person-circle" size={30} />
            <Text style={styles.username}>Prénom Nom</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.messageText}>Vous a identifié dans une publication</Text>

        <View>
          <Text style={styles.dateText}>Cette semaine</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.inline}>
            <Icon name="person-circle" size={30} />
            <Text style={styles.username}>Prénom Nom</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.messageText}>Vous a identifié dans une publication</Text>
        </View>

        <View>
          <Card row height={160} style={{marginBottom: 15}}>
            <Card.Section imageSource={cardImage} imageStyle={{width: 115, height: '100%'}} />
            <Card.Section
              content={[
                {text: 'Blue Beach Club'},
                {
                  text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nam explicabatque veniam voluptatum tempore suscipit amet deserunt dolores enim voluptatem, atsapiente nemo esse provident',
                },
              ]}
              style={{padding: 10}}
            />
          </Card>
        </View>
           
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            
            <TouchableOpacity>
              <Text style = {{marginRight: 5}}>Accepter</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Refuser</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Text>Discussion</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="chevron-forward-outline" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.inline}>
            <Icon name="person-circle" size={30} />
            <Text style={styles.username}>Prénom Nom</Text>
          </TouchableOpacity>
          <Text style={styles.messageText}>Vous a identifié dans une publication</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mentionneText: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  dateText: {
    color: '#000',
    fontWeight: 'bold',
    marginTop: 16,
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  abonnement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 16,
  },
  messageText: {
    color: 'gray',
    fontSize: 13,
    marginLeft: 25,
  },
  btn: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
export default FollowersComponent;
