import { StyleSheet, Text, View } from "react-native";
import Tile from "./components/Tile/Tile";
import paths from "./routing";
import { useNetInfo } from "@react-native-community/netinfo";

const Index = () => {
  const { isConnected } = useNetInfo();

  if (!isConnected) {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 36,
            borderBlockColor: "#fff",
            borderWidth: 1,
            borderColor: "#fff",
            padding: 10,
          }}
        >
          Włącz internet!
        </Text>
      </View>
    );
  }

  return (
    <View style={Styles.wrapper}>
      <Tile label="Produkty" path={paths.products} />
      <Tile label="Wydatki" path={paths.expenses} />
    </View>
  );
};

export default Index;

const Styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
});
