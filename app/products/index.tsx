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
import Styles from "./index.styles";
import ListItem from "./components/ListItem/ListItem";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";
import ProductsForm from "../components/Forms/ProductsForm/ProductsForm";
import useKeyboardOpen from "../hooks/useKeyboardOpen";
import FlatListSeparator from "../components/FlatListSeparator/FlatListSeparator";

const Index = () => {
  const { data, isLoading } = useFetchProducts();
  const { deleteProduct } = useDeleteProduct();
  const isOpen = useKeyboardOpen();

  if (isLoading) {
    return (
      <View style={Styles.loader}>
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
      keyboardVerticalOffset={isOpen ? 80 : 100}
    >
      <SafeAreaView style={Styles.root}>
        <View style={Styles.wrapper}>
          <FlatList
            data={data}
            scrollEnabled
            ItemSeparatorComponent={() => <FlatListSeparator />}
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
