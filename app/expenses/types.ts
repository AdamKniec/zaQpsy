import { Control } from "react-hook-form";

export type ControlProp = Control<Expense>;

type Expense = {
  productName: string;
  price: string;
  date: Date;
};
