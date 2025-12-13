import {
  FlatList,
  Text,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import "react-native-get-random-values";

import { SafeAreaView } from "react-native-safe-area-context";
import useFetchExpenses from "../api/expenses/useFetchExpenses";
import ListItem from "../components/ListItem/ListItem";
import { useEffect, useState } from "react";

import useDeleteExpense from "../api/expenses/useDeleteExpenses";

import RootPageStyles from "./index.styles";
import Modal from "../components/Modal/Modal";
import ExpenseForm from "../components/Forms/ExpenseForm";

interface Expense {
  name: string;
  id: string;
  date: string;
  price: number;
}
const Index = () => {
  const [listItems, setListItems] = useState<Expense[]>([]);
  const { data } = useFetchExpenses();

  const { deleteExpense } = useDeleteExpense();
  const [modalOpen, setModalOpen] = useState(false);

  const formatDate = (date: string) => {
    const dajeObj = new Date(date);
    const year = dajeObj.getFullYear();
    const month = dajeObj.getUTCMonth() + 1;
    const day = dajeObj.getUTCDate() + 1;

    const formattedDate = `${day}-${month}-${year}`;
    // TODO remove this condition after data is migrated
    // LEGACY DATA ISSUE
    if (formattedDate === "2-1-1970") {
      return "Nie ma daty";
    }
    return formattedDate;
  };

  useEffect(() => {
    setListItems(data);
  }, [data]);

  if (!data) {
    return <Text>LOADING DATA...</Text>;
  }

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
              formatDate(expense.item.date);
              return (
                <ListItem
                  productName={expense.item.name}
                  price={expense.item.price}
                  date={formatDate(expense.item.date)}
                  uuid={expense.item.id}
                  handleRemoveProduct={handleRemoveProduct}
                />
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "blue",
            marginLeft: 20,
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {listItems?.length}
          </Text>
        </View>
        <View style={RootPageStyles.form}>
          <Pressable onPress={() => setModalOpen(true)}>
            <View>
              <Text style={{ color: "#fff" }}>DODAJ!</Text>
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
