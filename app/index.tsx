import { View } from "react-native";
import Tile from "./components/Tile/Tile";
import paths from "./routing";
import { useNetInfo } from "@react-native-community/netinfo";
import NoInternet from "./components/NoInternet/NoInternet";
import ShoppingCartIcon from "../assets/images/shopping-cart.png";
import ExpensesIcon from "../assets/images/expenses.png";
import Styles from "./index.styles";

const Index = () => {
  const { isConnected } = useNetInfo();

  if (!isConnected) {
    return <NoInternet />;
  }

  return (
    <View style={Styles.wrapper}>
      <Tile label="Zakupy" path={paths.products} imgSrc={ShoppingCartIcon} />
      <Tile label="Wydatki" path={paths.expenses} imgSrc={ExpensesIcon} />
    </View>
  );
};

export default Index;
