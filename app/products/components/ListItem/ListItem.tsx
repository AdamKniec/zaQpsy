import Ionicons from "@expo/vector-icons/Ionicons";
import { Animated, Easing, Pressable, Text, View } from "react-native";
import Styles from "./ListItem.styles";
import { useEffect, useRef } from "react";

interface ProductNameProps {
  productName: string;
  handleRemoveProduct: (uuid: string) => void;
  uuid: string;
  isLoading: boolean;
  idToBeRemoved: string;
}

const ListItem = (props: ProductNameProps) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (props.isLoading && props.uuid === props.idToBeRemoved) {
      rotateAnim.setValue(0);

      const animation = Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      animation.start();
      return () => animation.stop();
    }
  }, [props.isLoading, props.idToBeRemoved]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={Styles.wrapper}>
      <Text style={{ ...Styles.text, ...Styles.shared }}>
        <Text> {props.productName}</Text>
      </Text>

      <Pressable
        style={Styles.pressable}
        onPress={() => props.handleRemoveProduct(props.uuid)}
      >
        {props.isLoading && props.uuid === props.idToBeRemoved ? (
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Ionicons name="cog" size={24} color="green" />
          </Animated.View>
        ) : (
          <Ionicons name="checkbox-outline" size={24} color={"green"} />
        )}
      </Pressable>
    </View>
  );
};

export default ListItem;
