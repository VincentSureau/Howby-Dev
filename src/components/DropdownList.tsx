import React from 'react'
import { View, Text } from 'react-native'
import SelectList from 'react-native-dropdown-select-list'
import { Departements } from '../data/Departements'

const data = [
    {
        key: '1',
        value: 'Gard',
    },
    {
        key: '2',
        value: 'Lozère',
    },
    {
        key: '3',
        value: 'Nord',
    },
    {
        key: '4',
        value: 'Oise',
    },
    {
        key: '5',
        value: 'Oise',
    },
    {
        key: '6',
        value: 'Oise',
    }
]

const DropdownList = () => {
    const [selected, setSelected] = React.useState(null);

    return (
        <View style = {{paddingHorizontal: 20, paddingVertical: 50, flex: 1}}>
        <SelectList data={data} setSelected={setSelected} />
        </View>
    )
}

export default DropdownList