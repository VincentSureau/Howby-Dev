import React, {useCallback, useContext, useEffect} from 'react';

import {Alert, Platform} from 'react-native';
import {View, Text, Button, Colors, Image, Assets} from 'react-native-ui-lib';
import {observer} from 'mobx-react';

import {useServices} from '../../services';
import {useStores} from '../../stores';
import { useRoute } from '@react-navigation/native';

const ButtonSpace = 20;

export const UserCreated: React.FC = observer(({}) => {

  const { nav, t } = useServices();
  const route = useRoute();

  const { firstname } = route.params;

  const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <View flex bg-bgColor2 centerV>
      <View centerH flex centerV>
        <View>
            <View>
                <Text>Merci</Text><Text color={Colors.secondary}>{capitalize(firstname)}</Text>
            </View>
            <View>
                <Text>C'est prêt !</Text>
            </View>
        </View>
        <View>
            <Text>Votre inscription est bien enregistrée</Text>
            <Text>Vous allez recevoir un email de confirmation</Text>
            <Text>Cliquez sur le lien pour confirmer votre adresse email</Text>
        </View>
      </View>
      <View centerH>
        <Text>{t.do('homeOffline.footer.subtitle')}</Text>
      </View>
    </View>
  );
});