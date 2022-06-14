import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Aliraza Lalani</Text>
      <Text style={styles.paraStyle}>I am a React Native Developer </Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/guy.jpg")}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>About me</Text>
        <Text style={styles.descStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum
        </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL("www.google.com");
          }}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/fluency/48/undefined/instagram-new.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL("https://www.facebook.com/aliraza.lalani.6/");
          }}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/color/48/undefined/facebook.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL("www.google.com");
          }}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://img.icons8.com/fluency/48/undefined/linkedin-circled.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    alignItems: "center",
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "JosefinSans_700Bold",
    lineHeight: 30,
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_600SemiBold",
    lineHeight: 30,
    alignSelf: "center",
  },
  descStyle: {
    fontSize: 18,
    color: "#fff",
    paddingBottom: 30,
  },
  //   buttonStyle: {
  //     width: 200,
  //     height: 200,
  //   },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default About;
