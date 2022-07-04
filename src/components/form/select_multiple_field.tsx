import React from 'react';
import { useField } from '@formiz/core';
import { If } from '@kanzitelli/if-component';
import { FlatList, StyleSheet } from 'react-native';
import {View, Text, Colors, Button} from 'react-native-ui-lib';

interface Choice {
  label: string;
  value: number;
}

interface SelectMultipleFieldProps {
  label: string;
  required?: boolean;
  name: string;
  items: Array<Choice>;
  initialValue?: string;
};

export const SelectMultipleField: React.FC<SelectMultipleFieldProps> = (props: SelectMultipleFieldProps) => {
    const {
      errorMessage,
      id,
      isValid,
      isSubmitted,
      setValue,
      value,
      valueDebounced,
      otherProps,
    } = useField(props);

    const { required, name } = props;
    const {
      children,
      label,
      options,
      helper,
      validMessage,
      ...rest
    } = otherProps;
  
    const selectedValuesDebounced = valueDebounced || [];

    const showError = !isValid && (selectedValuesDebounced.length >= 2 || isSubmitted);

    const selectedValues = value || [];
  
    const changeValue = (itemValue, itemIndex) => {
      const nextValues = selectedValues.find(x => x === itemValue.value)
        ? selectedValues.filter(x => x !== itemValue.value)
        : [...selectedValues,itemValue.value]
      ;
  
      setValue(nextValues);
    };
  
    return (
      <View marginB-s4>
        <Text style={StyleSheet.flatten([styles.label, {color: Colors.secondary}])}>
          {label + ((required && ' *') || '')}
        </Text>
        <View flex row style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
          {options.map((item, index) => {
            return <Button
              key={index}
              label={item.label}
              onPress={() => changeValue(item, index)}
              backgroundColor={
                selectedValues.find(x => x ===  item.value)
                ? Colors.accent
                : '#FFFFFF'
              }
              color={
                selectedValues.find(x => x ===  item.value)
                ? '#FFFFFF'
                : Colors.accent
              }
              marginT-s1 
              marginB-s1
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              borderRadius={7}
              borderColor={Colors.accent}
              outlineColor={Colors.accent}
              style={{height: 45, width: '48%'}}
            />
          })}
        </View>
        <If 
            _={showError && errorMessage != null}
            _then={() => <Text style={styles.error}>{errorMessage}</Text>} 
        />
      </View>
    );
};

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
});