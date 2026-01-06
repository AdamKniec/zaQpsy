import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  TextInput,
  Platform,
  ActivityIndicator,
  Button,
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

const addProductSchema = z.object({
  name: z.string().nonempty("Pole wymagane!"),
});
type AddExpenseSchemaType = z.infer<typeof addProductSchema>;

const Index = () => {
  const { data, isLoading } = useFetchProducts();
  const { addProduct } = useAddProducts();
  const { deleteProduct } = useDeleteProduct();
  const { control, handleSubmit, reset, formState } =
    useForm<AddExpenseSchemaType>({
      defaultValues: {
        name: "",
      },
      resolver: zodResolver(addProductSchema),
    });
  const isFormValid = formState.isValid;

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

          <Button
            title="Dodaj!"
            onPress={handleSubmit(handleButtonPress)}
            disabled={!isFormValid}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Index;
