import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Stack } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

export const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={RootLayoutStyles.root}>
        <StatusBar barStyle="light-content" backgroundColor="#201b4a" />
        <Stack>
          <Stack.Screen name="index" options={{ title: "Kategorie" }} />
          <Stack.Screen name="products/index" options={{ title: "Produkty" }} />
          <Stack.Screen name="expenses/index" options={{ title: "Wydatki" }} />
        </Stack>
      </View>
    </QueryClientProvider>
  );
}

const RootLayoutStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
