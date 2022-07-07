import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Departements} from '../../data/Departements';
import { useField } from '@formiz/core';
import { FlatList, StyleSheet } from 'react-native';
import {View, Text, Colors, Button} from 'react-native-ui-lib';
import { If } from '@kanzitelli/if-component';


interface DepartementFieldProps {
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
};


const DepartementField: React.FC<DepartementFieldProps> = (props: DepartementFieldProps) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
    otherProps,
  } = useField(props);

  const [isTouched, setIsTouched] = React.useState(false);

  const { required, name, label, placeholder } = props;

  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <View marginB-s4>
      <Text style={StyleSheet.flatten([styles.label, {color: Colors.secondary}])}>
        {label + ((required && ' *') || '')}

      </Text>
      <SelectDropdown
        data={Departements}
        defaultButtonText={placeholder}
        disableAutoScroll={true}
        onSelect={(selectedItem, index) => {
          setValue(selectedItem);
        }}

        onFocus={() => setIsTouched(true)}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.dep_name;

        }}
        rowTextForSelection={(item, index) => {
          return `${item.num_dep} - ${item.dep_name}`;
        }}
      />
      <If
        _={showError && errorMessage != null}
        _then={() => <Text style={styles.error}>{errorMessage}</Text>} 
      />
    </View>
  );
};

export default DepartementField;

const styles = StyleSheet.create({
  error: {
    color: '#C60030',
  },
  label: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  dropdown2BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {backgroundColor: '#444', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
