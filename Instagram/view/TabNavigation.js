import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Search from "./Search";
import Reels from "./Reels";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/homeF.png")
                    : require("../assets/home.png")
                }
                style={{ width: 30, height: 30 }}
              ></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/searchF.png")
                    : require("../assets/search.png")
                }
                style={{ width: 35, height: 35 }}
              ></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? require("../assets/reelF.png")
                    : require("../assets/reel.png")
                }
                style={{ width: 30, height: 30 }}
              ></Image>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
                <Image
                source={require("../assets/profile.png")}
                style={{ width: 38, height: 38, borderRadius:40, borderWidth:2, borderColor:'black' }}
              ></Image>
            ) : (
              <Image
                source={require("../assets/profile.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
