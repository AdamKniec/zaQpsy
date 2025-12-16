import { Text, View } from "react-native";
import Styles from "./styles";

const NoInternet = () => {
  return (
    <View style={Styles.wrapper}>
      <Text style={Styles.text}>Włącz internet!</Text>
    </View>
  );
};

export default NoInternet;
