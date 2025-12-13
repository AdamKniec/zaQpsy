import { StyleSheet, View } from "react-native";
import Tile from "./components/Tile/Tile";
import paths from "./routing";

const Index = () => {
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
