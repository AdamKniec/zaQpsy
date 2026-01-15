import { Control } from "react-hook-form";

type ControlProp = Control<Expense>;

type Expense = {
  productName: string;
  price: string;
  date: Date;
};

export default ControlProp;
