import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Stack } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={RootLayoutStyles.root}>
        <StatusBar barStyle="light-content" backgroundColor="#201b4a" />
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </View>
    </QueryClientProvider>
  );
}

const RootLayoutStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
