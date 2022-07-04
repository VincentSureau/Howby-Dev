import { useField } from '@formiz/core';
import { If } from '@kanzitelli/if-component';
import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable, TextInput } from 'react-native';
import {View, Text, TouchableOpacity, Incubator, Colors, Button} from 'react-native-ui-lib';

interface Choice {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  required?: boolean;
  name: string;
  items: Array<Choice>;
  initialValue?: string;
};

export const SelectField: React.FC<SelectFieldProps> = (props: SelectFieldProps) => {
    const {errorMessage, isValid, isSubmitted, setValue, value} = useField(props);

    const {label, required, name, ...otherProps} = props;
  
    const [isTouched, setIsTouched] = React.useState(false);
    const showError = !isValid && (isTouched || isSubmitted);

    return (
      <View marginB-s4>
        <Text style={StyleSheet.flatten([styles.label, {color: Colors.secondary}])}>
          {label + ((required && ' *') || '')}
        </Text>
        {props.items.map((item, index) => (
          <Button 
            key={index}
            label={item.label} 
            marginT-s4 
            backgroundColor={item.value == value ? Colors.secondary : Colors.accent}
            color="#FFFFFF"
            labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
            borderRadius={7}
            style={{height: 45, marginBottom: 10}}
            onPress={() => setValue(item.value)}
          />
        ))}
        <TextInput
            style={styles.hiddentInput}
            value={value || props.initialValue || ''}
            onChangeText={setValue}
            onBlur={() => setIsTouched(true)}
            {...otherProps}
        />
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
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: "#000000",
    paddingBottom: 4
  },
  hiddentInput: {
    height: 0,
    width: 0
  },
});