import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React from "react";
  import Ionicons from 'react-native-vector-icons/Ionicons';
  
  
  const HeaderComponent = () => {
    return (
      <>
        <View style={styles.container}>
          <SafeAreaView style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
            <View>
              <Text style={{ fontWeight: "900" }}>Messages</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Ionicons name = {"search-outline"} size={25} style={styles.headerIcons} />
  
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={{
                    uri: "https://img.icons8.com/ios-glyphs/60/000000/new-message.png",
                  }} style ={styles.headerIcons}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Ionicons name = {"compass-outline"} size={25} style={styles.headerIcons}/>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </>
    );
  };
  const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    headerIcons:{
      width: 25,
      height: 25,
      marginLeft: 10
      
    }
  });
  
  export default HeaderComponent;
  