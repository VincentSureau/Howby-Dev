import { useField } from '@formiz/core';
import { If } from '@kanzitelli/if-component';
import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable, TextInput } from 'react-native';
import {View, Text, TouchableOpacity, Incubator} from 'react-native-ui-lib';

type FieldProps = {
  label: string;
  required?: boolean;
  placeholder: string;
  name: string;
};

export const TextField: React.FC<FieldProps> = (props: FieldProps) => {
    const {errorMessage, isValid, isSubmitted, setValue, value} = useField(props);

    const {label, placeholder, required, name, ...otherProps} = props;
  
    const [isTouched, setIsTouched] = React.useState(false);
    const showError = !isValid && (isTouched || isSubmitted);
  
    return (
      <>
        <Incubator.TextField
            
            label={label + (required && ' *')}
            value={value || ''}
            onChangeText={setValue}
            placeholder={placeholder}
            onBlur={() => setIsTouched(true)}
            {...otherProps}
        />
        <If 
            _={showError && errorMessage != null}
            _then={() => <Text style={styles.error}>{errorMessage}</Text>} 
        />
      </>
    );
};

const styles = StyleSheet.create({
  error: {
    color: '#C60030',
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