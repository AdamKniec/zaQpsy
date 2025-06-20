import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import ListItem from "./components/ListItem/ListItem";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import useFetchProducts from "./api/useFetchProducts";
import { useDeleteProduct } from "./api/useDeleteProducts";
import { useAddProducts } from "./api/useAddProduct";

interface Product {
  name: string;
  id: string;
}

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState<Product[]>([]);
  const { data } = useFetchProducts();
  const { deleteProduct } = useDeleteProduct();
  const { addProduct } = useAddProducts();

  useEffect(() => {
    setListItems(data);
  }, [data]);

  if (!data) {
    return <Text>LOADING DATA...</Text>;
  }

  //todo handle this case properly
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
    addProduct({
      id: uuidv4(),
      name: inputValue,
    });
    setInputValue("");
  };

  const handleRemoveProduct = (id: string) => {
    const updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
    deleteProduct(id);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <SafeAreaView style={RootPageStyles.root}>
      <Text style={{ padding: 20, color: "violet" }}>Lista zakupów</Text>
      <View style={{ gap: "10px", paddingHorizontal: 20 }}>
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
                uuid={product.item.id}
                handleRemoveProduct={handleRemoveProduct}
              />
            );
          }}
        ></FlatList>
      </View>

      <View style={RootPageStyles.form}>
        <TextInput
          placeholder="Dodaj produkt"
          style={RootPageStyles.input}
          value={inputValue}
          placeholderTextColor={"grey"}
          onChangeText={handleInputChange}
        />
        <Pressable onPress={handleButtonPress} style={RootPageStyles.button}>
          <View>
            <Text style={RootPageStyles.buttonLabel}>Dodaj!</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const RootPageStyles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    maxHeight: "90%",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    color: "black",
    width: "70%",
    padding: Platform.select({
      ios: 10,
    }),
    paddingLeft: 15,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "blue",
  },
  buttonLabel: {
    color: "white",
  },
});
export default Index;
