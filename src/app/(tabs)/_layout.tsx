import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#78c78c",
        headerStyle: {
          backgroundColor: "#f3f3f3",
        },
      }}
    >
      <Tabs.Screen
        name="films"
        options={{
          title: "Films",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="multimedia" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
