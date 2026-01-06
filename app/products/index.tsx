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
import useDeleteProduct from "../api/products/useDeleteProducts";
import useAddProducts from "../api/products/useAddProduct";
import useFetchProducts from "../api/products/useFetchProducts";
import RootPageStyles from "./index.styles";
import ListItem from "./components/ListItem/ListItem";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface Product {
  name: string;
  id: string;
}

const addProductSchema = z.object({
  name: z.string().nonempty("Pole wymagane!"),
});
type AddExpenseSchemaType = z.infer<typeof addProductSchema>;

const Index = () => {
  const { data, isLoading } = useFetchProducts();

  const { addProduct } = useAddProducts();
  const { deleteProduct } = useDeleteProduct();
  const { control, handleSubmit, reset } = useForm<AddExpenseSchemaType>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(addProductSchema),
  });

  if (isLoading) {
    return (
      <View style={RootPageStyles.loader}>
        <ActivityIndicator color={"#fff"} size={"large"} />
      </View>
    );
  }

  //todo handle this case properly
  const handleButtonPress = (data: any) => {
    addProduct({
      id: uuidv4(),
      name: data.name,
    });

    reset();
  };

  const handleRemoveProduct = (id: string) => {
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
            data={data}
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

        {data && <ItemsCounter value={data.length} />}
        <View style={RootPageStyles.form}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Dodaj produkt"
                style={RootPageStyles.input}
                value={value}
                placeholderTextColor={"grey"}
                onChangeText={onChange}
              />
            )}
          />

          <Pressable
            onPress={handleSubmit(handleButtonPress)}
            style={RootPageStyles.button}
          >
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
