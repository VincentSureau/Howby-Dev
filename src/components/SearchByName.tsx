import React, { useCallback, useEffect } from 'react'
import { TextInput, Alert, FlatList } from 'react-native'
import { useRef, useState } from 'react'
import { isNotEmptyArray } from '@formiz/validations'
import { Text, View } from 'react-native-ui-lib'

const data = [
    {id:1, name : 'johan'},
    {id:2, name : 'le Bla Bar'},
    {id:3, name : 'Clémentine'},
    {id:4, name : 'Arthur C'},
    {id:5, name : 'Léo'},
    {id:6, name : 'Hayley'}
]

export type ContactType = {
    id: number;
    name: string;
}

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
    const start = useCallback(async () => {
        try {
            // todo: retrieve contact list by API when ready
            // const data = await api.user.getContacts();
            setOriginalUsers(data);
            setFilteredUsers(data);
        } catch (e) {
          Alert.alert('Error', 'There was a problem fetching data :(');
        }
      }, [/*api.counter*/]);
    
      useEffect(() => {
        start();
      }, []);
          

    const renderItem = ({item}: {item: ContactType}) => {
        return(
            <View>
                <Text style = {{fontSize: 30}}>{item.name}</Text>
            </View>
        )
    }

    const searchName = (input: string) => {
        const searchData = originalUsers.filter((item) => {
            // we search contact name that includes the input in their name
            // we trim and lowercase the input and the original name
            return item.name.toLowerCase().includes(input.trim().toLowerCase());
        });
        // we change the value of filteredUsers
        // at every change of this value, the flatlist will be updated
        setFilteredUsers(searchData);
    }
  return (
    <View>
        <View>
            <TextInput 
                placeholder = "Search Name"
                onChangeText={(input)=>{
                    searchName(input)
                }} 
            />
        </View>

        <FlatList 
            data={filteredUsers}
            renderItem={renderItem}
            keyExtractor = {item => item.id.toString()} 
        />
    </View>
  )
}

export default SearchByName