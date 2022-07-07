import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Departements} from '../data/Departements';

const Dropdown = () => {
  return (
    <SelectDropdown
      data={Departements}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.dep_name;
      }}
      rowTextForSelection={(item, index) => {
        return `${item.num_dep} - ${item.dep_name}`;
      }}
    />
  );
};

export default Dropdown;
