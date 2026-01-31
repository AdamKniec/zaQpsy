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
import { useState } from "react";

import useDeleteExpense from "../api/expenses/useDeleteExpenses";

import Styles from "./index.styles";
import Modal from "../components/Modal/Modal";
import ItemsCounter from "../components/ItemsCounter/ItemsCounter";
import ExpenseForm from "../components/Forms/ExpensesForm/ExpenseForm";
import ExpenseListItem from "../components/ExpenseListItem/ExpenseListItem";
import FlatListSeparator from "../components/FlatListSeparator/FlatListSeparator";

const Index = () => {
  const { data, isLoading } = useFetchExpenses();

  const { deleteExpense } = useDeleteExpense();
  const [modalOpen, setModalOpen] = useState(false);

  const formatDate = (date: string) => {
    const dajeObj = new Date(date);
    const year = dajeObj.getFullYear();
    const month = dajeObj.getUTCMonth() + 1;
    const day = dajeObj.getUTCDate();

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
      <View style={Styles.loader}>
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
      <SafeAreaView style={Styles.root}>
        <View style={Styles.listWrapper}>
          <FlatList
            data={data}
            scrollEnabled
            ItemSeparatorComponent={() => <FlatListSeparator />}
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
        <View style={Styles.form}>
          <Pressable onPress={() => setModalOpen(true)}>
            <View>
              <Text style={Styles.buttonLabel}>DODAJ!</Text>
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
