import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { View, Text, Button, Colors, TouchableOpacity, Carousel } from 'react-native-ui-lib';
import { observer } from 'mobx-react';

import { useServices } from '../../services';
import { useStores } from '../../stores';

import { Section } from '../../components/section';

import { Formiz, useForm, FormizStep } from '@formiz/core';
import { TextField } from '../../components/form/field';

import { isEmail } from '@formiz/validations';
import { isRequired } from '@formiz/validations';

import * as Progress from 'react-native-progress';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { SelectField } from '../../components/form/select_field';
import { INTERESTS } from '../../data/Interests';
import { SelectMultipleField } from '../../components/form/select_multiple_field';

export const Register: React.FC = observer(({ }) => {
  const { nav, t, api } = useServices();
  const { counter, ui } = useStores();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [birthdayDateText, setBirthdayDateText] = useState(moment(new Date()).format('DD/MM/YYYY'));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    // let tempDate = new Date(currentDate);
    // let formatedDate =
    //   tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    // let formatedTime = 'Hours:' + tempDate.getHours() + ' | Minutes:' + tempDate.getMinutes();
    // setText(formatedDate + '\n' + formatedTime);
    setBirthdayDateText(moment(currentDate).format('DD/MM/YYYY'));
  };

  const inputName = useRef<typeof TextField>(null);

  const start = useCallback(async () => {
    try {
    } catch (e) {
      Alert.alert('Error', 'There was a problem fetching data :(');
    }
  }, [api.counter]);

  const registrationForm = useForm();

  useEffect(() => {
    start();
  }, []);

  const handleSubmit = (values: any) => {
    console.log(values); // Retrieves values after submit
  };

  const carousel = React.createRef<typeof Carousel>();

  const calculProgress = () => {
    if (!registrationForm.currentStep || !registrationForm.steps) {
      return 0;
    }

    return Math.round((registrationForm.currentStep.index + 1) / registrationForm.steps.length * 100) / 100;
  }

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Section title={t.do('registration.title')}>
            <View marginB-s4>
              <Progress.Bar progress={calculProgress()} color={Colors.secondary} width={null} />
              <View flex right>
                <Text>
                  {registrationForm.currentStep && registrationForm.currentStep.index + 1} sur{' '}
                  {registrationForm.steps?.length}
                </Text>
              </View>
            </View>
            <Formiz connect={registrationForm} onValidSubmit={handleSubmit}>
              <Carousel
                autoplay={false}
                loop={false}
                pagingEnabled={false}
                showCounter={false}
                ref={carousel}
              >
                <FormizStep as={View} name="step1">
                  <TextField
                    label="Identifiant de connexion"
                    placeholder="Adresse email ou numéro de téléphone"
                    required={true}
                    name="username"
                    validations={[
                      {
                        rule: isRequired(),
                        message: "Merci d'indiquer votre email",
                      },
                      {
                        rule: isEmail(),
                        message: "L'adresse email n'est pas valide",
                      },
                    ]}
                  />
                </FormizStep>

                <FormizStep as={View} name="step2">
                  <TextField
                    label="Mot de passe"
                    placeholder="Votre mot de passe"
                    required={true}
                    name="password"
                    secureTextEntry={true}
                    validations={[
                      {
                        rule: isRequired(),
                        message: 'Veuillez choisir un mot de passe',
                      },
                      {
                        rule: (value: string) => {
                          let strongPassword = new RegExp(
                            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
                          );
                          return strongPassword.test(value);
                        },
                        message:
                          'Le mot de passe doit contenir au moins une minuscule, une majuscule et un caractère spécial',
                      },
                    ]}
                  />
                  <TextField
                    label="Confirmation"
                    placeholder="Confirmation"
                    required={true}
                    name="repeat-password"
                    secureTextEntry={true}
                    validations={[
                      {
                        rule: isRequired(),
                        message: 'Veuillez confirmer votre mot de passe',
                      },
                      {
                        rule: value => value === registrationForm.values.password,
                        message: 'Les mots de passe ne sont pas identiques',
                      },
                    ]}
                  />
                </FormizStep>
                <FormizStep as={View} name="step3">
                  <SelectField
                    label="Vous vous définissez en tant que"
                    name="gender"
                    items={[
                      { label: 'Femme', value: 'female' },
                      { label: 'Homme', value: 'male' },
                      { label: 'Autre', value: 'other' },
                    ]}
                    initialValue={'female'}
                  />
                </FormizStep>
                <FormizStep as={View} name="step4">
                  <TextField
                    label="Votre prénom"
                    placeholder="Votre prénom"
                    required={true}
                    name="firstname"
                    validations={[
                      {
                        rule: isRequired(),
                        message: "Merci d'indiquer votre prénom",
                      },
                    ]}
                  />
                  <TextField
                    label="Votre nom"
                    placeholder="Votre nom"
                    required={true}
                    name="lastname"
                    validations={[
                      {
                        rule: isRequired(),
                        message: "Merci d'indiquer votre nom",
                      },
                    ]}
                  />
                </FormizStep>
                <FormizStep as={View} name="step5">
                
                  {Platform.OS === 'web' ? (
                    <TextField
                      name="birthday"
                      placeholder="jj/mm/yyyy"
                      label="Votre date de naissance"
                      required={true}
                      value={moment(date).format('DD/MM/YYYY')}
                    />
                  ) : (
                        <>
                          <TouchableOpacity
                            onPress={() => setShow(true)}
                          >
                            <TextField
                              name="birthday"
                              placeholder="Votre date de naissance"
                              label="Votre date de naissance"
                              required={false}
                              value={birthdayDateText}
                              editable={true}
                              onPressIn={() => setShow(true)}
                            />
                          </TouchableOpacity>
                          {show && (
                            <DateTimePicker
                              locale='fr-FR'
                              testID="dateTimePicker"
                              value={date}
                              mode="date"
                              onChange={onChange}
                            />
                          )}
                        </>
                      )
                  }

                </FormizStep>

                <FormizStep as={View} name="step6">

                </FormizStep>
                <FormizStep as={View} name="step7">
                  <SelectMultipleField
                    label="Choisissez 5 centres d'intêret ou plus"
                    name="interests"
                    validations={[
                      {
                        rule: (val) => (val || []).length >= 5,
                        message: "Merci de choisir au moins 5 centres d'intêrets",
                      },
                    ]}
                    options={INTERESTS}
                  />
                </FormizStep>

              </Carousel>
            </Formiz>
            

                <View style={style.buttons}>
                  <View>
                    {!registrationForm.isFirstStep && (
                      <Button
                        marginT-s4
                        backgroundColor={Colors.accent}
                        color="#FFFFFF"
                        labelStyle={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}
                        label="Précédent"
                        borderRadius={7}
                        style={{ height: 45, marginBottom: 20 }}
                        onPress={() => {
                          registrationForm.prevStep();
                          carousel.current?.goToPage(registrationForm.currentStep?.index - 1);
                        }}
                      />
                    )}
                  </View>
                  <View>
                    {registrationForm.isLastStep ? (
                      <Button
                        marginT-s4
                        backgroundColor={Colors.secondary}
                        color="#FFFFFF"
                        labelStyle={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}
                        label="Je m'inscris"
                        borderRadius={7}
                        style={{ height: 45, marginBottom: 20 }}
                        onPress={() => registrationForm.submit()}
                        disabled={!registrationForm.isValid && registrationForm.isStepSubmitted}
                      />
                    ) : (
                      <Button
                        marginT-s4
                        backgroundColor={Colors.accent}
                        color="#FFFFFF"
                        labelStyle={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}
                        label="Suivant"
                        borderRadius={7}
                        style={{ height: 45, marginBottom: 20 }}
                        onPress={() => {
                          registrationForm.submitStep();
                          if (registrationForm.isStepValid) {
                            carousel?.current?.goToNextPage();
                          }
                        }}
                        disabled={!registrationForm.isStepValid && registrationForm.isStepSubmitted}
                      />
                    )}
                  </View>
                </View>

              </Section>
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
  windowsPicker: {
    flex: 1,
    paddingTop: 10,
    width: 350,
  },
});
