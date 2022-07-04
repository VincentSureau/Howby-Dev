import React from 'react';
import { useField } from '@formiz/core';
import { If } from '@kanzitelli/if-component';
import { StyleSheet } from 'react-native';
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
  
    const { selectedImages: selectedImagesDebounced } = valueDebounced || {
      selectedImages: [],
    };

    const showError = !isValid && (selectedImagesDebounced.length >= 2 || isSubmitted);

    const { selectedImages } = value || { selectedImages: [] };

    const formGroupProps = {
      errorMessage,
      helper,
      id,
      isRequired: !!required,
      label,
      showError,
      name,
      ...rest,
    };
  
    const changeValue = (itemValue, itemIndex) => {
      const nextValues = (selectedImages.find((x) => x.index === itemIndex)
        ? selectedImages.filter((x) => x.index !== itemIndex)
        : [
          selectedImages[1] || selectedImages[0],
          {
            value: itemValue,
            index: itemIndex,
          },
        ]
      ).filter((x) => !!x);
  
      const isIdentical = !!nextValues[0]
        && !!nextValues[1]
        && nextValues[0].value === nextValues[1].value;
  
      setValue(
        nextValues.length
          ? {
            isIdentical,
            value: isIdentical ? nextValues[0].value : null,
            selectedCount: nextValues.length,
            selectedImages: nextValues,
          }
          : null,
      );
    };

    const renderItem = ({item}: {item: any}) => {
      return (
        <Button label={item.label} />
      );
    };
  
    console.log(options);
    return (
      <View>
        {/* <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={item => item.value.toString()}
        /> */}
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