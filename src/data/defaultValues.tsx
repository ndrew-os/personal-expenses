import { Category, Expense, ModalInfo } from "../types";
import formatDate from "../utils/formatDate";

export const defaultModalInfo: ModalInfo = {
    title: '',
    isForm: false,
    content: (<></>)
}

export const defaultExpense: Expense = {
    amount: 0,
    category: '',
    date: new Date(),
    description: ''
}