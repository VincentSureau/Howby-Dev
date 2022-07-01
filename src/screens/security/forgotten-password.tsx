import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, TextInput} from 'react-native';
import {View, Text, Button, Incubator} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import { Formiz, useForm } from '@formiz/core';
import { TextField } from '../../components/form/field';
import {isEmail} from '@formiz/validations';

export const ForgottenPassword: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const start = useCallback(async () => {
    try {
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  const forgottenPasswordForm = useForm();
  const [error, setError] = useState(null);

  useEffect(() => {
    start();
  }, []);

  const handleSubmit = async (values: any) => {
    setError(null);
    console.log(values) // Retrieves values after submit
    Alert.alert('Mot de passe');
  }

  return (
    <View flex bg-bgColor centerV>
        <View padding-s4>
          <View centerH>
            {error && <Text>{error}</Text>}
          </View>
          <Formiz
            connect={forgottenPasswordForm}
            onValidSubmit={handleSubmit}
          >
            <TextField
              label="Email"
              placeholder="Votre email"
              required={true}
              name="email"
              validations={[
                {
                  rule: isEmail(),
                  message: "Votre email n'est pas valide"
                }
              ]}
            />
            <Button 
              backgroundColor="#FB3C62"
              color="#FFFFFF"
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              label="Réinitialiser mon mot de passe"
              borderRadius={7}
              style={{height: 45, marginBottom: 20}}
              onPress={() => forgottenPasswordForm.submit()}
              disabled={!forgottenPasswordForm.isValid && forgottenPasswordForm.isSubmitted}
            />
          </Formiz>
        </View>
    </View>
  );
});

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  formView: {
    marginTop: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    margin: 15,
  },
});