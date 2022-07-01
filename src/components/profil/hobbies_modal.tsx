import React, { useState } from 'react'
import { ImageBackground, Dimensions, ImageSourcePropType, StyleSheet, TextInput } from 'react-native'
import { View, Text, Dialog, Colors, Button, Modal, TouchableOpacity, Image } from 'react-native-ui-lib';
import { Icon } from '../icon';
import {Ionicons} from '@expo/vector-icons';

interface  HowbyModalPropsType {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setUserHobbies: ([]: Array<number>) => void;
  hobbies: Array<any>;
  userHobbies: Array<any>;
}

const HobbiesModal = ({showModal, setShowModal, hobbies, userHobbies, setUserHobbies}: HowbyModalPropsType) => {
  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.TextInputFocus : styles.textInput;
  
  const toggleHobby = id => {
    console.log(id)
    if(userHobbies.indexOf(id) !== -1) {
      // je filtre la liste des hobby pour enlever le hobby selectionné
      setUserHobbies(userHobbies.filter(hobby => hobby !== id));
    } else {
      // j'ajoute la liste des hobbys actuel + l'id du nouvel hobby
      setUserHobbies([...userHobbies, id]);
    }
  };

  return (
      <Modal    
          visible={showModal}
          onDismiss={() => setShowModal(false)}
      >
        <Button 
          enableShadow
          style={
            {
              width: 44,
              height: 44,
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 1,
            }
          } 
          link
          onPress={() => setShowModal(false)}
          iconSource={() => (
            <Ionicons style={{
              textShadowColor: "rgba(0,0,0,.3)",
              textShadowOffset: {
                width: 0,
                height: 1,
              },
              textShadowRadius: 2.22,

            elevation: 3,}} name="close-sharp" size={44} color={Colors.whitish} />
          )}
        />
            <View centerH centerV>
              <View>
                <Text style={styles.title}>Centres d'intérêts</Text>
              </View>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="search-outline" size={30} />
                  <TextInput placeholder="Rechercher" style={customStyle} />
                </View>

                {hobbies.map((hobby, index) => (
                  <TouchableOpacity 
                    key={hobby.id}
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => toggleHobby(hobby.id)}
                  >
                    <Image source={{uri: hobby.img,}} style={userHobbies.includes(hobby.id) ? styles.selectedIcons : styles.icons} />
                    <Text style={{marginLeft: 10}}>{hobby.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
      </Modal>
  )
}

export default HobbiesModal

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  icons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
  },
  selectedIcons: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 5,
    marginBottom: 10,
  },
  title: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    paddingTop: 10,
  },
  reviewSectionIcons: {
    width: 40,
    height: 40,
    marginRight: 10,
    padding: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  reviewSectionNumbers: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  textInput: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: 10,
  },
  TextInputFocus: {
    //backgroundColor: 'Transparent',
    padding: 10,
    //borderColor: 'none',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    //outlineStyle: 'none',
  },
});
