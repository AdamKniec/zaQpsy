import { Controller } from "react-hook-form";
import { Button, TextInput, View } from "react-native";
import RootPageStyles from "./PrductsForm.styles";
import useProductsForm from "./useProductsForm";

const ProductsForm = () => {
  const { control, isFormValid, onSubmit } = useProductsForm();
  return (
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

      <Button title="Dodaj!" onPress={onSubmit} disabled={!isFormValid} />
    </View>
  );
};

export default ProductsForm;
