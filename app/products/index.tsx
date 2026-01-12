import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  ActivityIndicator,
} from "react-native";

import "react-native-get-random-values";
import useDeleteProduct from "../api/products/useDeleteProducts";
import useFetchProducts from "../api/products/useFetchProducts";
import RootPageStyles from "./index.styles";
import ListItem from "./components/ListItem/ListItem";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";
import ProductsForm from "../components/Forms/ProductsForm/ProductsForm";
import useKeyboardOpen from "../hooks/useKeyboardOpen";

const Index = () => {
  const { data, isLoading } = useFetchProducts();
  const { deleteProduct } = useDeleteProduct();
  const isOpen = useKeyboardOpen();

  if (isLoading) {
    return (
      <View style={RootPageStyles.loader}>
        <ActivityIndicator color={"#fff"} size={"large"} />
      </View>
    );
  }

  const handleRemoveProduct = (id: string) => {
    deleteProduct(id);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={isOpen ? 80 : 50}
    >
      <SafeAreaView style={RootPageStyles.root}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
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
        <ProductsForm />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Index;
