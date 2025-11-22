import {
  FlatList,
  Text,
  TextInput,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { SafeAreaView } from "react-native-safe-area-context";
import useFetchExpenses from "../api/expenses/useFetchExpenses";
import ListItem from "../components/ListItem/ListItem";
import { useEffect, useState } from "react";
import useAddExpenses from "../api/expenses/useAddExpenses";
import useDeleteExpense from "../api/expenses/useDeleteExpenses";
import { useRouter } from "expo-router";
import RootPageStyles from "./index.styles";
import Modal from "../components/Modal/Modal";
import ExpenseForm from "../components/Forms/ExpenseForm";

interface Expense {
  name: string;
  id: string;
}
const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState<Expense[]>([]);
  const { addExpense } = useAddExpenses();
  const { data } = useFetchExpenses();
  const router = useRouter();
  const { deleteExpense } = useDeleteExpense();
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  useEffect(() => {
    setListItems(data);
  }, [data]);

  if (!data) {
    return <Text>LOADING DATA...</Text>;
  }

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
      addExpense({
        id: uuidv4(),
        name: inputValue,
      });
      setInputValue("");
    }
  };

  const handleRemoveProduct = (id: string) => {
    const updatedList = listItems.filter((item) => item.id !== id);
    setListItems(updatedList);
    deleteExpense(id);
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
            renderItem={(expense) => {
              return (
                <ListItem
                  productName={expense.item.name}
                  uuid={expense.item.id}
                  handleRemoveProduct={handleRemoveProduct}
                />
              );
            }}
          />
        </View>
        <View style={RootPageStyles.form}>
          <TextInput
            placeholder="Dodaj wydatek"
            style={RootPageStyles.input}
            value={inputValue}
            placeholderTextColor={"grey"}
            onChangeText={handleInputChange}
          />
          <Pressable onPress={() => setModalOpen(true)}>
            <View>
              <Text>Toggle Modal</Text>
            </View>
          </Pressable>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <ExpenseForm />
          </Modal>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Index;
