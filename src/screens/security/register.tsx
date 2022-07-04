import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet, Platform} from 'react-native';
import {View, Text, Button, Carousel, Colors, TouchableOpacity} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {If} from '@kanzitelli/if-component';

import {useServices} from '../../services';
import {useStores} from '../../stores';

import {Section} from '../../components/section';
import {validateEmail} from '../../utils/help';

import { Formiz, useForm, FormizStep } from '@formiz/core';
import { TextField } from '../../components/form/field';

import { isEmail } from '@formiz/validations'
import { isRequired } from '@formiz/validations'

import * as Progress from 'react-native-progress';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export const Register: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  console.log(Platform.OS)

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
    console.log(values) // Retrieves values after submit
  }

  const carousel = React.createRef<typeof Carousel>();

  const calculProgress = () => {
    if (!registrationForm.currentStep || !registrationForm.steps) {
      return 0;
    }

    return Math.round((registrationForm.currentStep.index + 1) / registrationForm.steps.length * 100)/100;
  }
  
 


  return (

    <View flex bg-bgColor>
      
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <View>
  

          </View>
          <Section title={t.do('registration.title')}>
            <View marginB-s4>
              <Progress.Bar progress={calculProgress()} color={Colors.secondary} width={null} />
              <View flex right>
                <Text>
                  {registrationForm.currentStep && registrationForm.currentStep.index + 1}{' '}
                  sur {registrationForm.steps?.length}
                </Text>
              </View>
            </View>
            <Formiz
              connect={registrationForm}
              onValidSubmit={handleSubmit}
            >
              <Carousel
                autoplay={false}
                loop={false}
                pagingEnabled={false}
                showCounter={false}
                ref={carousel}
              >  
                <FormizStep as={View} name="step1">

                  {Platform.OS === "web" ? (
                      <TextField 
                        name="birthday"
                        placeholder="jj/mm/yyyy"
                        label="Votre date de naissance"
                        required={true}
                        value={moment(date).format('DD/MM/YYYY')}
                        onChange={onChange}
                      />
                  ) : (
                    <>
                      <TouchableOpacity onPress={showDatepicker}>
                        <TextField 
                          name="birthday"
                          placeholder="Votre date de naissance"
                          label="Votre date de naissance"
                          required={false}
                          value={moment(date).format('DD/MM/YYYY')}
                          editable={false}
                          onChange={onChange}
                        />
                      </TouchableOpacity>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          required={true}
                          value={date}
                          mode="date"
                          is24Hour={true}
                          onChange={onChange}
                        />
                      )}
                    </>
                  )

                }


                  <TextField 
                    label="Identifiant de connexion"
                    placeholder="Adresse email ou numéro de téléphone"
                    required={true}
                    name="username"
                    validations={[
                      {
                        rule: isRequired(),
                        message: "Merci d'indiquer votre email"
                      },
                      {
                        rule: isEmail(),
                        message: "L'adresse email n'est pas valide"
                      }
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
                        message: "Veuillez choisir un mot de passe"
                      },
                      {
                        rule: value => {
                          let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
                          return strongPassword.test(value);
                        },
                        message: "Le mot de passe doit contenir au moins une minuscule, une majuscule et un caractère spécial"
                      }
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
                        message: "Veuillez confirmer votre mot de passe"
                      },
                      {
                        rule: value => value === registrationForm.values.password,
                        message: "Les mots de passe ne sont pas identiques"
                      }
                    ]}
                  />
            
                </FormizStep>
                  <TextField
                      label="Votre prénom"
                      placeholder="Votre prénom"
                      required={true}
                      name="firstname"
                      validations={[
                        {
                          rule: isRequired(),
                          message: "Merci d'indiquer votre prénom",
                        }
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
                        }
                      ]}
                    />
                <FormizStep as={View} name="step3">
                  <TextField
                        label="Quel âge avez-vous ?"
                        placeholder="Votre âge"
                        required={true}
                        name="birthday"
                        validations={[
                          {
                            rule: isRequired(),
                            message: "Merci d'indiquer votre âge",
                          }
                        ]}
                    />
                </FormizStep>
                <FormizStep as={View} name="step4">
                </FormizStep>
                <FormizStep as={View} name="step5">
                </FormizStep>
                <FormizStep as={View} name="step6">
                  <TextField
                    label="email"
                    placeholder="Votre email"
                    required={true}
                    name="email"
                    validations={[
                      {
                        rule: isRequired(),
                        message: "Merci d'indiquer votre email"
                      },
                      {
                        rule: isEmail(),
                        message: "L'adresse email n'est pas valide"
                      }
                    ]}
                  />
                </FormizStep>
                <FormizStep as={View} name="step3">
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
                    labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
                    label="Précédent"
                    borderRadius={7}
                    style={{height: 45, marginBottom: 20}}
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
                    labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
                    label="Je m'inscris"
                    borderRadius={7}
                    style={{height: 45, marginBottom: 20}}
                    onPress={() => registrationForm.submit()}
                    disabled={
                      !registrationForm.isValid && registrationForm.isStepSubmitted
                    }
                  />

                ) : (
                  <Button
                    marginT-s4 
                    backgroundColor={Colors.accent}
                    color="#FFFFFF"
                    labelStyle={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
                    label="Suivant"
                    borderRadius={7}
                    style={{height: 45, marginBottom: 20}}
                    onPress={() => {
                      registrationForm.submitStep();
                      if(registrationForm.isStepValid) {
                        console.log(carousel);
                        carousel?.current?.goToNextPage();
                      }
                    }}
                    disabled={
                      !registrationForm.isStepValid && registrationForm.isStepSubmitted
                    }
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