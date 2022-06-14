import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/external-wanicon-flat-wanicon/64/undefined/external-training-training-and-coaching-wanicon-flat-wanicon.png",
          }}
        />
        {/* <Text>Course</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Student")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/external-itim2101-flat-itim2101/64/undefined/external-students-online-education-itim2101-flat-itim2101.png",
          }}
        />
        {/* <Text>Student</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/cute-clipart/64/undefined/about.png",
          }}
        />
        {/* <Text>About</Text> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/plasticine/100/undefined/contact-card.png",
          }}
        />
        {/* <Text>Contact</Text> */}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});
export default Menu;
