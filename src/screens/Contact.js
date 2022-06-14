import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = (props) => {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("please fill all the fields");
    } else {
      Alert.alert(`ThankYou ${name}`);
      props.navigation.navigate("Home");
    }
  };
  return (
    <ScrollView style={styles.mainContact}>
      <View style={styles.textComponents}>
        <Text style={styles.firstText}>Level Up Your Knowledge</Text>
        <Text style={styles.secondText}>You can reacy us anytime via</Text>
        <Text style={styles.secondText}>lalani@gmail.com</Text>
      </View>
      <View style={styles.InputComponent}>
        <Text style={styles.inputText}>Enter your name</Text>
        <TextInput
          value={name}
          placeholder="aliraza lalani"
          onChangeText={(entereData) => {
            setName(entereData);
          }}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.InputComponent}>
        <Text style={styles.inputText}>Enter your email</Text>
        <TextInput
          value={email}
          placeholder="aliraza@gmail.com"
          onChangeText={(entereData) => {
            setEmail(entereData);
          }}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.InputComponent}>
        <Text style={styles.inputText}>Enter your mobile</Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="xxxx-xxx-xxxx"
          onChangeText={(entereData) => {
            setPhone(entereData);
          }}
          style={styles.inputStyle}
          value={phone}
        />
      </View>
      <View style={styles.InputComponent}>
        <Text style={styles.inputText}>How can we help you?</Text>
        <TextInput
          numberOfLines={5}
          multiline={true}
          value={message}
          placeholder="Tell us about your self"
          onChangeText={(entereData) => {
            setMessage(entereData);
          }}
          style={styles.inputStyle}
        />
      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={check}
          onValueChange={() => {
            setCheck(!check);
          }}
        />
        <Text style={styles.wrapperText}>
          I have read all the terms and conditions
        </Text>
      </View>
      <TouchableOpacity
        disabled={!check}
        onPress={submit}
        style={[
          styles.buttonStyle,
          {
            backgroundColor: check ? "#4630EB" : "grey",
          },
        ]}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  mainContact: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    height: "100%",
    width: "100%",
  },
  firstText: {
    marginVertical: 15,
    fontSize: 20,
    fontFamily: "JosefinSans_500Medium",
  },
  secondText: {
    color: "grey",
    fontSize: 16,
    letterSpacing: 1,
  },
  textComponents: {},
  InputComponent: {
    marginTop: 25,
  },
  inputStyle: {
    padding: 5,
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
  },
  inputText: {
    marginBottom: 2,
    fontSize: 16,
    color: "grey",
    fontFamily: "Nunito_600SemiBold",
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  wrapperText: {
    paddingLeft: 10,
    fontFamily: "JosefinSans_400Regular",
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "white",
  },
});
