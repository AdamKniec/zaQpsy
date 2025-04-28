import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import { FlatList } from "react-native";
import { ListItem } from "./components/ListItem/ListItem";
import "react-native-get-random-values"; // <- to musi być PRZED importem uuid
import { v4 as uuidv4 } from "uuid";

interface Product {
  name: string;
  id: string;
}

const Index = () => {
  const [listItems, setListItems] = useState<Product[]>([]);

  const [inputValue, setInputValue] = useState("");

  const handleButtonPress = () => {
    setListItems((prevState) => {
      return [
        ...prevState,
        {
          id: uuidv4(),
          name: inputValue,
        },
      ];
    });
    setInputValue("");
  };

  const handleRemoveProduct = (id: string) => {
    const updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <SafeAreaView style={RootPageStyles.root}>
      <View style={{ gap: "10px" }}>
        <FlatList
          data={listItems}
          scrollEnabled
          style={{ height: "90%" }}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 16 }} />;
          }}
          renderItem={(product) => {
            return (
              <ListItem
                productName={product.item.name}
                id={product.item.id}
                handleRemoveProduct={handleRemoveProduct}
              />
            );
          }}
        ></FlatList>
      </View>

      <View>
        <TextInput
          placeholder="Dodaj produkt"
          style={{ color: "white" }}
          value={inputValue}
          placeholderTextColor={"grey"}
          onChangeText={handleInputChange}
        />
        <Button title="Dodaj" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const RootPageStyles = StyleSheet.create({
  root: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
    backgroundColor: "#201b4a",
    padding: 20,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
});
