import { useField } from '@formiz/core';
import { If } from '@kanzitelli/if-component';
import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable, TextInput } from 'react-native';
import {View, Text, TouchableOpacity, Incubator, Colors} from 'react-native-ui-lib';
import { TextFieldProps } from 'react-native-ui-lib/generatedTypes/src/incubator';

interface FieldProps {
  label: string;
  required?: boolean;
  placeholder: string;
  name: string;
  value: any;
};

export const TextField: React.FC<FieldProps> = (props: FieldProps) => {
    const {errorMessage, isValid, isSubmitted, setValue, value} = useField(props);

    const {label, placeholder, required, name, ...otherProps} = props;
  
    const [isTouched, setIsTouched] = React.useState(false);
    const showError = !isValid && (isTouched || isSubmitted);

    return (
      <View marginB-s4>
        <Incubator.TextField
            label={label + ((required && ' *') || '')}
            labelStyle={StyleSheet.flatten([styles.label, {color: Colors.secondary}])}
            fieldStyle={styles.withUnderline}
            value={value || ''}
            onChangeText={setValue}
            placeholder={placeholder}
            onBlur={() => setIsTouched(true)}
            validate={[() => isValid]}
            text70
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
});

// export const TextField: any = React.forwardRef<typeof View, FieldProps>((props: FieldProps, ref?: React.Ref<typeof TextField>) => {
//     const {errorMessage, isValid, isSubmitted, setValue, value} = useField(props);

//     const {label, placeholder, required, name, ...otherProps} = props;
  
//     const [isTouched, setIsTouched] = React.useState(false);
//     const showError = !isValid && (isTouched || isSubmitted);
  
//     return (
//       <View ref={ref}>
//         <Incubator.TextField
//             label={label + (required && ' *')}
//             value={value || ''}
//             onChangeText={setValue}
//             placeholder={placeholder}
//             onBlur={() => setIsTouched(true)}
//             {...otherProps}
//         />
//         <If 
//             _={showError && errorMessage != null}
//             _then={() => <Text style={styles.error}>{errorMessage}</Text>} 
//         />
//       </View>
//     );
// });