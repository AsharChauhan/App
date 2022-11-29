import React from "react";

import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import homeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";
import Bookmark from "./Bookmark";
import Notification from "./Notifications";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const BookStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="white">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "teal",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={Notification}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "black",

        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "green",

        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "blue",

        tabBarIcon: ({ color }) => (
          <Icon name="search-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkStackScreen}
      options={{
        tabBarLabel: "Bookmark",
        tabBarColor: "grey",
        tabBarIcon: ({ color }) => <Icon name="book" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "teal",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home "
      component={homeScreen}
      options={{
        title: "Home Screen",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="teal"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "red",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={""}
      options={{
        title: "Details Screen",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="red"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
const BookmarkStackScreen = ({ navigation }) => (
  <BookStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "grey",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <BookStack.Screen
      name="Bookmark "
      component={Bookmark}
      options={{
        title: "BookMark",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="grey"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </BookStack.Navigator>
);
