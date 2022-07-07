import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Departements} from '../data/Departements';

const DEPT = {Departements.dept_name};

const Dropdown = () => {
  return (
    <SelectDropdown
      data={DEPT}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

export default Dropdown;
