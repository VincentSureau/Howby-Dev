import React, {useCallback, useContext, useEffect, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {validateEmail} from '../../utils/help';
import { Formiz, useForm, FormizStep } from '@formiz/core';
import { TextField } from '../../components/form/field';
import { AuthContext } from '../../context/AuthContext';

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
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          {error && <Text>{error}</Text>}
          <Formiz
            connect={loginForm}
            onValidSubmit={handleSubmit}
          >
            <TextField
              label="email"
              placeholder="Votre email"
              required={true}
              name="email"
            />
            <TextField
              label="mot de passe"
              placeholder="Votre mot de passe"
              required={true}
              name="password"
            />
            <Button
                success
                style={style.button}
                onPress={() => loginForm.submit()}
                disabled={!loginForm.isValid && loginForm.isSubmitted}>
              <Text>Connexion</Text>
            </Button>
          </Formiz>
        </View>
      </ScrollView>
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