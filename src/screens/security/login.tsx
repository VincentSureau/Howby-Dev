import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, TextInput} from 'react-native';
import {View, Text, Button, Incubator} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {validateEmail} from '../../utils/help';
import { Formiz, useForm } from '@formiz/core';
import { TextField } from '../../components/form/field';
import { AuthContext } from '../../context/AuthContext';
import {isEmail, isRequired} from '@formiz/validations';

export const Login: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const start = useCallback(async () => {
    try {
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  const loginForm = useForm();
  const {login} = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    start();
  }, []);

  const handleSubmit = async (values: any) => {
    setError(null);
    console.log(values) // Retrieves values after submit
    const loginSuccess = await login(values.email, values.password);
    console.log(loginSuccess);
    if(!loginSuccess) {
      setError('Identifiants invalides');
    }
  }

  return (
    <View flex bg-bgColor centerV>
        <View padding-s4 marginB-s10>
          <View centerH marginB-s4>
            {error && <Text color="#C60030">{error}</Text>}
          </View>
          <Formiz
            connect={loginForm}
            onValidSubmit={handleSubmit}
          >
            <TextField
              label="Email"
              placeholder="Votre email"
              required={true}
              name="email"
              keyboardType="email-address"
              validations={[
                {
                  rule: isRequired(),
                  message: "Merci d'indiquer votre email"
                },
                {
                  rule: isEmail(),
                  message: "Votre email n'est pas valide"
                }
              ]}
            />
            <TextField
              label="Mot de passe"
              placeholder="Votre mot de passe"
              required={true}
              name="password"
              secureTextEntry={true}
              validations={[
                {
                  rule: isRequired(),
                  message: "Merci d'indiquer votre email"
                }
              ]}
            />
            <Button
              marginT-s4 
              backgroundColor="#FB3C62"
              color="#FFFFFF"
              labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
              label="Connexion"
              borderRadius={7}
              style={{height: 45, marginBottom: 20}}
              onPress={() => loginForm.submit()}
              disabled={!loginForm.isValid && loginForm.isSubmitted}
            />
          </Formiz>
        </View>
        <Button
          link
          color="#000000"
          label="J'ai oublié mon mot de passe"
          labelStyle={{flexGrow: 1, textAlign: 'center'}}
          onPress={() => nav.push('ForgottenPassword')}
        />
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