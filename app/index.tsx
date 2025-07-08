import { View } from "react-native";
import Tile from "./components/Tile/Tile";
import paths from "./routing";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Tile label="Produkty" path={paths.products} />
      <Tile label="Wydatki" path={paths.expenses} />
    </View>
  );
};

export default Index;
