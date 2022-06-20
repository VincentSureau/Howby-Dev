import React, { ReactNode } from 'react';
import {TextInput, Alert, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {isNotEmptyArray} from '@formiz/validations';
import {Image, Text, View} from 'react-native-ui-lib';



const data = [
  {id: 1, name: 'johan',
  icon: '../../assets/icons/person-circle.svg'},
  {id: 2, name: 'le Bla Bar', icon: '../../assets/icons/person-circle.svg'},
  {id: 3, name: 'Clémentine', icon: '../../assets/icons/person-circle.svg'},
  {id: 4, name: 'Arthur C', icon: '../../assets/icons/person-circle.svg'},
  {id: 5, name: 'Léo' ,icon: '../../assets/icons/person-circle.svg'},
  {id: 6, name: 'Hayley' ,icon: '../../assets/icons/person-circle.svg'},
];

export type ContactType = {
  icon: ReactNode;
  id: number;
  name: string;
};

interface SearchByNameProps {
  contacts: Array<ContactType>;
}

const SearchByName = ({contacts}: SearchByNameProps) => {
  // originalUsers will store the complete list of the user contacts
  const [originalUsers, setOriginalUsers] = useState<Array<ContactType>>([]);
  // filteredUsers will store the filtered list of the user contacts
  // we need 2 states because if we only use on, the filtered user will disapears
  // and won't be found if the user remove of reinitialize the search input
  const [filteredUsers, setFilteredUsers] = useState<Array<ContactType>>([]);

  // when the component is displayed, we retrieve the user contact list
  const start = useCallback(
    async () => {
      try {
        // todo: retrieve contact list by API when ready
        // const data = await api.user.getContacts();
        setOriginalUsers(data);
        setFilteredUsers(data);
      } catch (e) {
        Alert.alert('Error', 'There was a problem fetching data :(');
      }
    },
    [
      /*api.counter*/
    ],
  );

  useEffect(() => {
    start();
  }, []);

  const renderItem = ({item, }: {item: ContactType}) => {
    return (
      <View style ={{marginBottom: 10}}>
        <Text style={{fontSize: 16,marginLeft: 10 }}>{item.name}</Text>
        <Image style = {{width: 20, height: 20}}>{item.icon}</Image>
      </View>
    );
  };

  const searchName = (input: string) => {
    const searchData = originalUsers.filter(item => {
      // we search contact name that includes the input in their name
      // we trim and lowercase the input and the original name
      return item.name.toLowerCase().includes(input.trim().toLowerCase());
    });
    // we change the value of filteredUsers
    // at every change of this value, the flatlist will be updated
    setFilteredUsers(searchData);
  };

  const [focus, setFocus] = useState(false);
  const customStyle = focus ? styles.TextInputFocus : styles.textInput;
  return (
    <View style={{padding: 10, marginTop: 20}}>
      <Text style ={{fontWeight: 'bold', color: '#F5A78A', fontSize: 15}}>Tout le monde </Text>
      <View style={{marginBottom: 20}}>
        <TextInput
          placeholder="Search Name"
          onChangeText={input => {
            searchName(input);
          }}
          onFocus={() => setFocus(true)}
          style={customStyle}
        />
      </View>
       <SafeAreaView >  
      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        
        
      />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputFocus: {
    //backgroundColor: 'Transparent',
    padding: 10,
    //borderColor: 'none',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    //outlineStyle: 'none',
  },

  textInput: {
    //backgroundColor: 'Transparent',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  nameList:{
    fontSize : 14
  }
});
export default SearchByName;

function onFocus() {
  throw new Error('Function not implemented.');
}
