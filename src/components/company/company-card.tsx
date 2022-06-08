import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import {View, Text, TouchableOpacity, Card, Button} from 'react-native-ui-lib';
import { useServices } from '../../services';
import { Icon } from '../icon';

type CompanyItemProps = {
  data: any;
};

const renderDescription = (description: string) => {
  return description.length <= 100 ? description : `${description.slice(0, 100)}...`;
}

export const CompanyCard: React.FC<CompanyItemProps> = ({data}: CompanyItemProps) => {
  const {nav, t, api} = useServices();

  return (
    <Card
      key={data.id}
      style={{marginBottom: 15}}
      onPress={() => nav.push('FeedDetails', { companyId: data.id })}
    >
      <Card.Section
        imageSource={{
          uri: data.featuredImage?.contentUrl || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&",
        }}
        imageStyle={{width: '100%', height: 120}}
        imageProps={{cover: true}}
      />
        <View padding-20>
          <Text text40 $textDefault>
            {data.name}
          </Text>

          {data.description && (
            <Text text70 $textDefault>
              {renderDescription(data.description)}
            </Text>
          )}

          <View>
            <Text text90 $textDisabled>
              10 Likes
            </Text>
            <View row right>
              <Button
                style={{marginRight: 10}}
                text90
                link
                iconSource={() => (
                  <Icon name="star" />
                )}
                label="rating"
              />
              <Button text90 link iconSource={() => <Icon name="share-social" />} label="Share"/>
            </View>
          </View>
        </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1
  },
  img: {
    width: 50,
    height: 50,
  },
  title:{
    fontSize: 17,
    marginTop: -15,
    marginLeft: 10,
    marginBottom: 2
  },
  bottomComponents: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    textAlignVertical: 'center'
  },
  favoriBtn:{
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "red",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
  
  },
  exclusifBtn: {
    fontWeight: "bold",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
   color: "#fff",
    backgroundColor: "#c48d52",
  },
  rating:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: "#efefef",
  },
  posts:{
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    backgroundColor: "#efefef",
    paddingTop: 5,

  },
  inline: {
    flexDirection: "row",
  },
});