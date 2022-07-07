import React, {useEffect, useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Departements} from '../../data/Departements';
import { useField } from '@formiz/core';
import { FlatList, StyleSheet } from 'react-native';
import {View, Text, Colors, Button, TouchableOpacity} from 'react-native-ui-lib';
import { If } from '@kanzitelli/if-component';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface DepartementFieldProps {
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  initialValue?: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  mode: 'date' | 'time';
};


const DateField: React.FC<DepartementFieldProps> = (props: DepartementFieldProps) => {
  const {
    errorMessage,
    id,
    isValid,
    isSubmitted,
    setValue,
    value,
    otherProps,
  } = useField(props);

  const { required, name, label, placeholder, initialValue, ...rest } = props;

  const [isTouched, setIsTouched] = React.useState(false);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(initialValue || new Date());

  const showError = !isValid && (isTouched || isSubmitted);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setValue(currentDate);
  };

  useEffect(() => {
    setValue(initialValue || new Date());
  }, [])

  return (
    <View marginB-s4>
      <Text style={StyleSheet.flatten([styles.label, {color: Colors.secondary}])}>
        {label + ((required && ' *') || '')}
      </Text>
      <TouchableOpacity 
        onPress={() => setShow(true)}
      >
        <Text style={styles.withUnderline}>
            {moment(date).format('DD/MM/YYYY')}
        </Text>
      </TouchableOpacity>
      <If
        _={showError && errorMessage != null}
        _then={() => <Text style={styles.error}>{errorMessage}</Text>} 
      />
      {show && (
        <DateTimePicker
          locale="fr-FR"
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
          {...rest}
        />
      )}
    </View>
  );
};

export default DateField;

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
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    paddingBottom: 4
  },
});
