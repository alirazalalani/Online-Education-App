import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";

const App = () => {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded, error] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name={"Home"} component={Home} /> */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} channelName="Lalani's Technical" />}
        </Stack.Screen>
        {/* CourseScreen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            // headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            // headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
