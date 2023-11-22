import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Search from "./Search";
import Reels from "./Reels";
import Profile from "./Profile";


const Tab = createBottomTabNavigator();

export default function TabNavigation({navigation}) {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
