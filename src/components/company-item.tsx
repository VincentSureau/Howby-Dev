import React from 'react';
import { StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import { useServices } from '../services';

type CompanyItemProps = {
  data: any;
};

export const CompanyItem: React.FC<CompanyItemProps> = ({data}: CompanyItemProps) => {
  const {nav, t, api} = useServices();

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => nav.push('FeedDetails', { companyId: data.id })}>
          <View>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&",
              }}
              style={styles.img}
            />
          </View>
          <View style={{ marginTop: "1rem" }}>
            <Text
              style={styles.title}
            >
              {`${data.name}`}
            </Text>
            {data.description ? 
              <Text style={{ marginLeft: "1rem" }}>
                  {`${data.description?.slice(0,50)}`}
              </Text>
              : null
            }
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.bottomComponents}>
        <Text style={styles.exclusifBtn}>Exclusif</Text>
        <Text style={styles.rating}>
          <Image 
            source={{uri: 'https://img.icons8.com/ios-glyphs/30/000000/star--v1.png'}}
            style={{height: 15, width: 15, marginRight: 10}}
          />Rating</Text>
        <Text style={styles.posts}>#  Posts</Text>
        <View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "red" : "white",
              },
              styles.favoriBtn,
            ]}
          >
            {({ pressed }) => (
              <Text>{pressed ? "Favori" : " +    Favori"}</Text>
            )}
          </Pressable>
        </View>
        <Text>+</Text>
      </View>
    </View>
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
    width: "50px",
    height: "50px",
  },
  title:{
    fontSize: 17,
    marginTop: -15,
    marginLeft: "1rem",
    marginBottom: '.2rem'
  },
  bottomComponents: {
    marginTop: ".5rem",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1rem",
    paddingBottom: ".5rem",
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