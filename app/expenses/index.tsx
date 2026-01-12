import {
  FlatList,
  Text,
  View,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import "react-native-get-random-values";

import { SafeAreaView } from "react-native-safe-area-context";
import useFetchExpenses from "../api/expenses/useFetchExpenses";
import ListItem from "../components/ListItem/ListItem";
import { useState } from "react";

import useDeleteExpense from "../api/expenses/useDeleteExpenses";

import RootPageStyles from "./index.styles";
import Modal from "../components/Modal/Modal";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";
import ExpenseForm from "../components/Forms/ExpensesForm/ExpenseForm";
import ExpenseListItem from "../components/ExpenseListItem/ExpenseListItem";

const Index = () => {
  const { data, isLoading } = useFetchExpenses();

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

  if (isLoading) {
    return (
      <View style={RootPageStyles.loader}>
        <ActivityIndicator color={"#fff"} size={"large"} />
      </View>
    );
  }

  const handleRemoveExpense = (id: string) => {
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
            data={data}
            scrollEnabled
            ItemSeparatorComponent={() => {
              return <View style={{ height: 16 }} />;
            }}
            renderItem={(expense) => {
              formatDate(expense.item.date);
              return (
                <ExpenseListItem
                  productName={expense.item.name}
                  price={expense.item.price}
                  date={formatDate(expense.item.date)}
                  uuid={expense.item.id}
                  handleRemoveExpense={handleRemoveExpense}
                />
              );
            }}
          />
        </View>

        {data && <ItemsCounter value={data.length} />}
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
