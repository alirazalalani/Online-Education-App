import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Courses from "../api/Course";

const Course = (props) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.cardImage}
              source={item.image}
            />
          </View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descText}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                props.navigation.navigate("CourseDetails");
              }}
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  titleText: {
    fontSize: 22,
    color: "#344055",
    textTransform: "uppercase",

    paddingBottom: 15,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  descText: {
    fontFamily: "JosefinSans_400Regular",
    textAlign: "left",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "uppercase",
  },
});
