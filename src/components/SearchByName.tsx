import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useRef, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { isNotEmptyArray } from '@formiz/validations'

const data = [
    {id:1, name : 'johan'},
    {id:2, name : 'le Bla Bar'},
    {id:3, name : 'Clémentine'},
    {id:4, name : 'Arthur C'},
    {id:5, name : 'Léo'},
    {id:6, name : 'Hayley'}
]
const SearchByName = () => {
    const [dataFromState, setData] = useState(data)

    const item = ({item}) => {
        return(
            <View>
                <Text style = {{fontSize: 30}}>{item.name}</Text>
            </View>
        )
    }
    const searchName = (input: string) => {
        const data  = dataFromState;
        const searchData = data.filter((item) => {
            return item.name;
        });
        setData(searchData)
    }
  return (
    <View>
        <View>
            <TextInput 
            placeholder = "Search Name"
            onChangeText={(input)=>{
                searchName(input)
            }} />
        </View>

      <FlatList data = {dataFromState}
      renderItem = {item}
      keyExtractor = {(item, index) => index.toString()} />
    </View>
  )
}

export default SearchByName