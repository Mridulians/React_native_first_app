import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Button, Platform, View } from "react-native";
import ModalForm from "@/components/ModalForm";
import { HapticTab } from "@/components/HapticTab";
import IconSymbol from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  return (
    <>
      <ModalForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)} // Function to close the modal
      />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: true,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Blog Posts",

            headerStyle: {
              backgroundColor: "#ede6e6",
            },
            headerTitleStyle: {
              color: "#000000", // Set the header title text color
              fontSize: 26, // Set the font size for the title
              fontWeight: "bold", // Set the title font weight
              fontFamily: "cursive",
            },
            headerRight: () => (
              <View style={{ marginRight: 10, width: 70 }}>
                {/* Add margin to the right button */}
                <Button
                  onPress={() => setModalVisible(true)}
                  title="Info"
                  color="#000000"
                />
              </View>
            ),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="home" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="news"
          options={{
            title: "News",
            headerStyle: {
              backgroundColor: "#ede6e6",
            },
            headerTitleStyle: {
              color: "#000000", // Set the header title text color
              fontSize: 26, // Set the font size for the title
              fontWeight: "bold", // Set the title font weight
              fontFamily: "cursive",
            },
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="newspaper" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerStyle: {
              backgroundColor: "#ede6e6",
            },
            headerTitleStyle: {
              color: "#000000", // Set the header title text color
              fontSize: 26, // Set the font size for the title
              fontWeight: "bold", // Set the title font weight
              fontFamily: "cursive",
            },
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person-circle" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
