import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import Styles from "./ProductsForm.styles";
import useProductsForm from "./useProductsForm";
import Button from "../../Button/Button";

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

      <Button label="Dodaj!" disabled={!isFormValid} onPress={onSubmit} />
    </View>
  );
};

export default ProductsForm;
