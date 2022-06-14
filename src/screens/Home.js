import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Menu from "../components/Menu";
const Home = (props) => {
  const description =
    "lorem ipsum sit amet, consectetuer adsipiscing elit. Aenean comoodo ligula eget dolor .";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          resizeMode="contain"
          style={styles.headerImage}
          source={require("../../assets/laptop.jpg")}
        />
        <Text style={styles.mainHeder}>Welcome to </Text>
        <Text
          style={[
            styles.mainHeder,
            {
              //   fontSize: 30,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    marginTop: 50,
    borderRadius: 20,
  },
  mainHeder: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    marginTop: 30,
    fontFamily: "Nunito_600SemiBold",
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    fontFamily: "JosefinSans_400Regular",
    lineHeight: 26,
  },
  lineStyle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "grey",
  },
});
export default Home;
