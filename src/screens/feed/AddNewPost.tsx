import {View, Text, TextInput} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-ui-lib';

import { useState } from 'react';

const uploadPost = Yup.object().shape({
  imageUrl: Yup.string().url().required('Une Url est requise'),
  content: Yup.string().max(5000, 'limite de caractères atteinte'),
});

const AddNewPost = () => {
    const [url, setUrl] = useState(false);
  return (
    <Formik
      initialValues={{content: '', imageUrl: ''}}
      onSubmit={() => {
        console.log('Votre post a bien été posté');
      }}
      validationSchema={uploadPost}
    >
      {({handleBlur, handleChange, handleSubmit, values, errors}) => (
        <View>
          <TextInput
            style={{color: 'black', fontSize: 20}}
            placeholder="écrire un commentaire"
            placeholderTextColor="gray"
            multiline={true}
            onChangeText={handleChange('content')}
            onBlur={handleBlur('content')}
            value={values.content}
          />

          <TextInput
          style={{color: 'black', fontSize: 20}}
            onChange={e => setUrl(e.nativeEvent.text)}
            placeholder="Entrez l'url d'une image"
            onChangeText={handleChange('imageUrl')}
          />
          <Button onPress={handleSubmit} title="Poster" />
        </View>
      )}
    </Formik>
  );
};

export default AddNewPost;
function usestate(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}

