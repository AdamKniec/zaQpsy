import {
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  Pressable,
  Platform,
  ActivityIndicator,
} from "react-native";

import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import useDeleteProduct from "../api/products/useDeleteProducts";
import useAddProducts from "../api/products/useAddProduct";
import useFetchProducts from "../api/products/useFetchProducts";
import RootPageStyles from "./index.styles";
import ListItem from "./components/ListItem/ListItem";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";

interface Product {
  name: string;
  id: string;
}

const Index = () => {
  const [listItems, setListItems] = useState<Product[]>([]);
  const [inputValue, setInputValue] = useState("");
  const { data, isLoading } = useFetchProducts();
  const { addProduct } = useAddProducts();
  const { deleteProduct } = useDeleteProduct();

  useEffect(() => {
    setListItems(data);
  }, [data]);
  if (isLoading) {
    return (
      <View style={RootPageStyles.loader}>
        <ActivityIndicator color={"#fff"} size={"large"} />
      </View>
    );
  }
  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  //todo handle this case properly
  const handleButtonPress = () => {
    // todo validate in schema
    if (inputValue.trim().length) {
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
    }
  };

  const handleRemoveProduct = (id: string) => {
    const updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
    deleteProduct(id);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 50}
    >
      <SafeAreaView style={RootPageStyles.root}>
        <View style={{ gap: "10px", paddingHorizontal: 20, height: "75%" }}>
          <FlatList
            data={listItems}
            scrollEnabled
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
          />
        </View>

        {listItems && <ItemsCounter value={listItems.length} />}
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
    </KeyboardAvoidingView>
  );
};

export default Index;
