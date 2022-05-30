import { View, Text, StyleSheet, Pressable, Image,  } from "react-native";
import React, { useState, useEffect } from "react";

import Ionicons from "react-native-vector-icons/Ionicons";

import { MESSAGES } from "../../data/Messages";
import { USERS } from "../../data/Users";



const MessagesComponent = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(MESSAGES);
  }, []);

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <View>

      <View>
        <Text style={styles.title}>Discussions</Text>
      </View>
      
      <View style={{ margin: "1rem" }}>
        {MESSAGES.map((msg, index) => (
          <View key={index}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", marginBottom: "10px" }}>
                <Text style={styles.vuStyle}>Vu .</Text>
                <Image
                  source={require("../../../assets/icons/person-circle.svg")}
                  style={{ width: 30, height: 30, marginLeft: "5px" }}
                />

                <Text
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    marginTop: "10px",
                  }}
                >
                  
                  {capitalize(msg.user)}
                </Text>
              </View>
              <View>
                <Pressable onPress={() => navigation.navigate("Camera")}>
                  <Ionicons name="camera-outline" size={20} />
                </Pressable>
              </View>
            </View>
            <View>
            <Text style={{ marginBottom: "10px", color: "gray" }}>
              {msg.Comment.length > 50
                ? msg.Comment.slice(0, 50).toLowerCase() +  '...'
                : msg.Comment.toLowerCase()}
            </Text>
            </View>
          </View>
        ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
title: {
flexDirection: "row",
justifyContent: "space-between",
margin: "1rem",
color: "#a56210",
fontSize: 14,
letterSpacing: 1,
fontWeight: "500",
},

vuStyle: {
padding: "5px",
borderRadius: 50,
borderWidth: 1,
borderColor: "red",
textAlign: "center",
},
});

export default MessagesComponent;