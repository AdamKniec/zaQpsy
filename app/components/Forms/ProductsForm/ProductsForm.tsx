import { Controller } from "react-hook-form";
import { Button, TextInput, View } from "react-native";
import Styles from "./ProductsForm.styles";
import useProductsForm from "./useProductsForm";

const ProductsForm = () => {
  const { control, isFormValid, onSubmit } = useProductsForm();
  return (
    <View style={Styles.form}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Dodaj produkt"
            style={Styles.input}
            value={value}
            placeholderTextColor={"grey"}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Dodaj!" onPress={onSubmit} disabled={!isFormValid} />
    </View>
  );
};

export default ProductsForm;
