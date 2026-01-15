import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import Styles from "./layout.styles";

export const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={Styles.root}>
        <StatusBar barStyle="light-content" />
        <Stack screenOptions={{ contentStyle: { backgroundColor: "#101922" } }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Kategorie",
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#101922" },
            }}
          />
          <Stack.Screen
            name="products/index"
            options={{
              title: "Produkty",
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#101922" },
            }}
          />
          <Stack.Screen
            name="expenses/index"
            options={{
              title: "Wydatki",
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#101922" },
            }}
          />
        </Stack>
      </View>
    </QueryClientProvider>
  );
}
