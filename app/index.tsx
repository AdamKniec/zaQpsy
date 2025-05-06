import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  FlatList,
} from "react-native";
import { useQuery, useMutation } from "@tanstack/react-query";

import ListItem from "./components/ListItem/ListItem";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface Product {
  name: string;
  id: string;
}

// TODO MOVE TO CUSTOM HOOK
// TODO FETCH USING SUPABASE OBJECT
const fetchProducts = async () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;

  const response = await fetch(`${apiUrl}/products`, {
    method: "GET",
    headers: {
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};

// TODO MOVE TO CUSTOM HOOK
const addProductRequest = async (newProduct: any) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;
  const response = await fetch(`${apiUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  return response.json();
};

// TODO MOVE TO CUSTOM HOOK
const deleteProductRequest = async (id: string) => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;

  const response = await fetch(`${apiUrl}/products?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      apikey: `${apiToken}`,
      Authorization: `Bearer ${apiToken}`,
      Prefer: "return=representation",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
};

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState<Product[]>([]);
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const { mutate, error: errorPost } = useMutation({
    mutationFn: addProductRequest,
  });
  useEffect(() => {
    setListItems(data);
  }, [data]);

  //TODO HANDLE DATA LOADING PROPERLY
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
    mutate({ id: uuidv4(), name: inputValue });
    setInputValue("");
  };

  const handleRemoveProduct = (id: string) => {
    const updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
    deleteProductRequest(id);
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
                uuid={product.item.id}
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
