import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#91345b",
        headerStyle: {
          backgroundColor: "#f3f3f3",
        },
      }}
    >
      <Tabs.Screen name="films" options={{ title: "Films" }} />

    </Tabs>
  );
};

export default TabLayout;
