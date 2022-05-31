import React, {useCallback, useEffect, useRef} from 'react';
import {ScrollView, Alert, ActivityIndicator, StyleSheet} from 'react-native';
import {View, Text, Button, Carousel} from 'react-native-ui-lib';
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

export const Register: React.FC = observer(({}) => {
  const {nav, t, api} = useServices();
  const {counter, ui} = useStores();

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

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View padding-s4>
          <Section title={t.do('registration.title')}>
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
                  <TextField
                    label="firstname"
                    placeholder="Votre prénom"
                    required={true}
                    name="firstname"

                    // validations={[
                    //   {
                    //     rule: isEmail(),
                    //     message: 'This is not a valid email',
                    //   },
                    //   {
                    //     rule: isRequired(),
                    //     message: 'Please enter your firstname',
                    //   }
                    // ]}
                  />
                  <TextField
                    label="lastname"
                    placeholder="Votre nom"
                    required={true}
                    name="lastname"
                  />
                </FormizStep>
                <FormizStep as={View} name="step2">
                  <TextField
                    label="email"
                    placeholder="Votre email"
                    required={true}
                    name="email"
                  />
                </FormizStep>
                <FormizStep as={View} name="step3">
                  <TextField
                      label="birthday"
                      placeholder="Votre date de naissance"
                      required={true}
                      name="birthday"
                  />
                </FormizStep>
              </Carousel>

            </Formiz>

            <View style={style.buttons}>
              <View>
                {!registrationForm.isFirstStep && (
                  <Button
                    style={style.button}
                    success
                    onPress={() => {
                      registrationForm.prevStep();
                      carousel.current?.goToPage(registrationForm.currentStep?.index - 1);
                    }}
                  >
                    <Text>Previous</Text>
                  </Button>
                )}
              </View>
              <Text>
                Etape{' '}
                {registrationForm.currentStep && registrationForm.currentStep.index + 1}{' '}
                sur {registrationForm.steps?.length}
              </Text>
              <View>
                {registrationForm.isLastStep ? (
                  <Button
                    success
                    style={style.button}
                    onPress={() => registrationForm.submit()}
                    disabled={
                      !registrationForm.isValid && registrationForm.isStepSubmitted
                    }>
                    <Text>Submit</Text>
                  </Button>
                ) : (
                  <Button
                    success
                    style={style.button}
                    onPress={() => {
                      registrationForm.submitStep();
                      if(registrationForm.isStepValid) {
                        console.log(carousel);
                        carousel?.current?.goToNextPage();
                      }
                    }}
                    disabled={
                      !registrationForm.isStepValid && registrationForm.isStepSubmitted
                    }>
                    <Text>Next</Text>
                  </Button>
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
});