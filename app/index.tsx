import { View } from "react-native";
import "react-native-get-random-values";
import Tile from "./components/Tile/Tile";

//TODO MOVE TO EXTERNAL FILE
export const paths = {
  products: "/products",
  expenses: "/expenses",
} as const;

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
