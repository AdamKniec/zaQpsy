import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={RootLayoutStyles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#201b4a" />
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </View>
  );
}

const RootLayoutStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
